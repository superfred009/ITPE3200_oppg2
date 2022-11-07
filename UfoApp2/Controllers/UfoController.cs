using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UfoApp2.Models;

namespace UfoApp2.Controllers
{
    [Route("[controller]/[action]")]
    public class UfoController : ControllerBase
    {

        private readonly IUfoRepository _db;

        public UfoController(IUfoRepository db)
        {
            _db = db;
        }

        public async Task<bool> Lagre(Observasjon innObservasjon)
        {
            return await _db.Lagre(innObservasjon);
        }

        public async Task<List<Observasjon>> HentAlle()
        {
            return await _db.HentAlle();
        }

        public async Task<bool> Slett(int id)
        {
            return await _db.Slett(id);
        }

        public async Task<bool> neste(int id)
        {
            return await _db.neste(id);
        }
        public async Task<bool> forrige(int id)
        {
            return await _db.forrige(id);
        }

        public async Task<Observasjon> HentEn(int id)
        {
            return await _db.HentEn(id);
        }

        public async Task<bool> Endre(Observasjon endreObservasjon)
        {
            return await _db.Endre(endreObservasjon);
        }

    }
}

