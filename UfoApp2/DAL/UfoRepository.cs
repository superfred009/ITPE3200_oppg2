using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;
using UfoApp2.Models;
using UfoApp2.Model;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace UfoApp2.DAL
{
    public class UfoRepository : IUfoRepository
    {
        private readonly UfoContext _db;

        public UfoRepository(UfoContext db)
        {
            _db = db;
        }

        public async Task<bool> Lagre(Observasjon innObservasjon)
        {
            try
            {
                var nyObervasjonRad = new Observasjoner();
                nyObervasjonRad.tittel = innObservasjon.tittel;
                nyObervasjonRad.sted = innObservasjon.sted;
                nyObervasjonRad.dato = innObservasjon.dato;
                nyObervasjonRad.beskrivelse = innObservasjon.beskrivelse;

                _db.ObservasjonerUFO.Add(nyObervasjonRad);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Observasjon>> HentAlle()
        {
            try
            {
                List<Observasjon> alleObservasjoner = await _db.ObservasjonerUFO.Select(k => new Observasjon
                {
                    id = k.id,
                    tittel = k.tittel,
                    sted = k.sted,
                    dato = k.dato,
                    beskrivelse = k.beskrivelse

                }).ToListAsync();
                return alleObservasjoner;
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> Slett(int id)
        {
            try
            {
                Observasjoner enObservasjon = await _db.ObservasjonerUFO.FindAsync(id);
                _db.ObservasjonerUFO.Remove(enObservasjon);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public async Task<bool> neste(int id)
        {
            try
            {
                Observasjoner enObservasjon = await _db.ObservasjonerUFO.FindAsync(id);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public async Task<bool> forrige(int id)
        {
            try
            {
                Observasjoner enObservasjon = await _db.ObservasjonerUFO.FindAsync(id);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<Observasjon> HentEn(int id)
        {
            Observasjoner enObservasjon = await _db.ObservasjonerUFO.FindAsync(id);
            var hentetObservasjon = new Observasjon()
            {
                id = enObservasjon.id,
                tittel = enObservasjon.tittel,
                sted = enObservasjon.sted,
                dato = enObservasjon.dato,
                beskrivelse = enObservasjon.beskrivelse
            };
            return hentetObservasjon;
        }

        public async Task<bool> Endre(Observasjon endreObservasjon)
        {
            try
            {
                var endreObjekt = await _db.ObservasjonerUFO.FindAsync(endreObservasjon.id);
                endreObjekt.tittel = endreObservasjon.tittel;
                endreObjekt.sted = endreObservasjon.sted;
                endreObjekt.dato = endreObservasjon.dato;
                endreObjekt.beskrivelse = endreObservasjon.beskrivelse;
                await _db.SaveChangesAsync();
            }
            catch
            {
                return false;
            }
            return true;
        }

        public static byte[] LagHash(string passord, byte[] salt)
        {
            return KeyDerivation.Pbkdf2(
                                password: passord,
                                salt: salt,
                                prf: KeyDerivationPrf.HMACSHA512,
                                iterationCount: 1000,
                                numBytesRequested: 32);
        }

        public static byte[] LagSalt()
        {
            var csp = new RNGCryptoServiceProvider();
            var salt = new byte[24];
            csp.GetBytes(salt);
            return salt;
        }
        public async Task<bool> LoggInn(Bruker bruker)
        {
            try
            {
                Brukere funnetBruker = await _db.Brukere.FirstOrDefaultAsync(b => b.Brukernavn == bruker.Brukernavn);
                //Sjekk passordet
                byte[] hash = LagHash(bruker.Passord, funnetBruker.Salt);
                bool ok = hash.SequenceEqual(funnetBruker.Passord);
                if (ok)
                {
                    return true;
                }
                return false;
            }
            catch
            {
                //_log.LogInformation(e.Message);
                return false;
            }
        }
    }
}

