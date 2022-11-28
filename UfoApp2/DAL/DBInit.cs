using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using UfoApp2.DAL;
using UfoApp2.Models;
using UfoApp2.Model;
using System.Reflection;

namespace UfoApp2.Model
{
    public static class DBInit
    {
        public static void Initialize(IApplicationBuilder app)
        {
            var serviceScope = app.ApplicationServices.CreateScope();

            var db = serviceScope.ServiceProvider.GetService<UfoContext>();

            db.Database.EnsureDeleted();
            db.Database.EnsureCreated();

            var observasjon1 = new Observasjoner { tittel = "Ufo over OsloMet", sted = "Pilestredet 35", dato = "2020-10-10", beskrivelse = "Ufoen var grønn og hadde 3 øyne" };
            var observasjon2 = new Observasjoner { tittel = "Nordlys og Ufo", sted = "Tromsø", dato = "2020-10-20", beskrivelse = "Deilig nordlys og Ufo i Tromsø denne helgen" };
            var observasjon3 = new Observasjoner { tittel = "Ufo landet på jordet mitt", sted = "Orderud gård", dato = "2020-11-10", beskrivelse = "Landet midt på natten, kom 2 grønne menn ut" };
            var observasjon4 = new Observasjoner { tittel = "Ufo over Oslo", sted = "Oslo", dato = "2020-09-10", beskrivelse = "Fløy over nattehimmelen, observert fra Karl Johan" };

            db.ObservasjonerUFO.Add(observasjon1);
            db.ObservasjonerUFO.Add(observasjon2);
            db.ObservasjonerUFO.Add(observasjon3);
            db.ObservasjonerUFO.Add(observasjon4);

            // lag en påoggingsbruker
            var bruker = new Brukere();
            bruker.Brukernavn = "Admin";
            var passord = "Gruppe7";
            byte[] salt = UfoRepository.LagSalt();
            byte[] hash = UfoRepository.LagHash(passord, salt);
            bruker.Passord = hash;
            bruker.Salt = salt;
            db.Brukere.Add(bruker);

            db.SaveChanges();
        }
    }
}


