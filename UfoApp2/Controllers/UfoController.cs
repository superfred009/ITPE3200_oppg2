using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Castle.Core.Logging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UfoApp2.Models;
using Microsoft.Extensions.Logging;

namespace UfoApp2.Controllers
{
    [Route("[controller]/[action]")]
    public class UfoController : ControllerBase
    {

        private readonly IUfoRepository _db;
        private ILogger<UfoController> _log;

        public UfoController(IUfoRepository db, ILogger<UfoController> log)
        {
            _db = db;
            _log = log;
        }

        public async Task<ActionResult> Lagre(Observasjon innObservasjon)
        {
            if(ModelState.IsValid)
            {
                bool returOK = await _db.Lagre(innObservasjon);
                if(!returOK)
                {
                    _log.LogInformation("Observasjon ble ikke lagret!");
                    return BadRequest("Observasjon ble ikke lagret!");
                }
                return Ok("Observasjon lagret!");
                }
            _log.LogInformation("Feil i inputvalidering!");
            return BadRequest("Feil i inputvalidering!");
        }

        public async Task<ActionResult> HentAlle()
        {
            List<Observasjon> alleObservasjoner = await _db.HentAlle();
            return Ok(alleObservasjoner);
        }

        public async Task<ActionResult> Slett(int id)
        {
            bool returOK = await _db.Slett(id);
            if(!returOK)
            {
                _log.LogInformation("Observasjon ble ikke slettet!");
                return NotFound("Observasjon ble ikke slettet!");
            }
            return Ok("Observasjon ble slettet!");
        }

        public async Task<ActionResult> neste(int id)
        {
            bool returOK = await _db.neste(id);
            if(!returOK)
            {
                _log.LogInformation("Neste observasjon ikke funnet!");
                return NotFound("Neste observasjon ikke funnet!");
            }
            return Ok("Neste observasjon funnet!");
        }
        public async Task<ActionResult> forrige(int id)
        {
            bool returOK = await _db.forrige(id);
            if (!returOK)
            {
                _log.LogInformation("Forrige observasjon ikke funnet!");
                return NotFound("Forrige observasjon ikke funnet!");
            }
            return Ok("Forrige observasjon funnet!");
        }

        public async Task<ActionResult> HentEn(int id)
        {
            Observasjon observasjon = await _db.HentEn(id);
            if(observasjon == null)
            {
                _log.LogInformation("Fant ikke observasjonen!");
                return NotFound("Fant ikke observasjonen!");
            }
            return Ok("Observasjonen funnet!");
        }

        public async Task<ActionResult> Endre(Observasjon endreObservasjon)
        {
            if(ModelState.IsValid)
            {
                bool returOK = await _db.Endre(endreObservasjon);
                if(!returOK)
                {
                    _log.LogInformation("Observasjonen ble ikke endret!");
                    return BadRequest("Observasjonen ble ikke endret!");
                }
                return Ok("Observasjonen endret!");
            }
            _log.LogInformation("Feil i inpurtvalidering!");
            return BadRequest("Feil i inputvalidering!");
            }

    }
}

