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
using UfoApp2.Model;
using Microsoft.AspNetCore.Http;

namespace UfoApp2.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class UfoController : ControllerBase
    {

        private readonly IUfoRepository _db;
        private ILogger<UfoController> _log;

        private const string _loggetInn = "loggetInn";

        public UfoController(IUfoRepository db, ILogger<UfoController> log)
        {
            _db = db;
            _log = log;
        }

        [HttpPost]
        public async Task<ActionResult> Lagre(Observasjon innObservasjon)
        {
            if (ModelState.IsValid)
            {
                bool returOK = await _db.Lagre(innObservasjon);
                if (!returOK)
                {
                    _log.LogInformation("Observasjon ble ikke lagret!");
                    return BadRequest();
                }
                return Ok();
            }
            _log.LogInformation("Feil i inputvalidering!");
            return BadRequest();
        }

        [HttpGet]
        public async Task<ActionResult> HentAlle()
        {
            List<Observasjon> alleObservasjoner = await _db.HentAlle();
            return Ok(alleObservasjoner);
        }

        public async Task<ActionResult> Slett(int id)
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString(_loggetInn)))
            {
                return Unauthorized();
            }
            bool returOK = await _db.Slett(id);
            if (!returOK)
            {
                _log.LogInformation("Observasjon ble ikke slettet!");
                return NotFound("Observasjon ble ikke slettet!");
            }
            return Ok("Observasjon ble slettet!");
        }

        public async Task<ActionResult> HentEn(int id)
        {
            Observasjon observasjon = await _db.HentEn(id);
            if (observasjon == null)
            {
                _log.LogInformation("Fant ikke observasjonen!");
                return NotFound("Fant ikke observasjonen!");
            }
            return Ok(observasjon);
        }

        [HttpPut]
        public async Task<ActionResult> Endre(Observasjon endreObservasjon)
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString(_loggetInn)))
            {
                return Unauthorized();
            }
            if (ModelState.IsValid)
            {
                bool returOK = await _db.Endre(endreObservasjon);
                if (!returOK)
                {
                    _log.LogInformation("Observasjonen ble ikke endret!");
                    return BadRequest("Observasjonen ble ikke endret!");
                }
                return Ok("Observasjonen endret!");
            }
            _log.LogInformation("Feil i inpurtvalidering!");
            return BadRequest("Feil i inputvalidering!");
        }

        [HttpPost]
        public async Task<ActionResult> LoggInn(Bruker bruker)
        {
            if (ModelState.IsValid)
            {
                bool returnOK = await _db.LoggInn(bruker);
                if (!returnOK)
                {
                    _log.LogInformation("Innloggingen feilet for bruker" + bruker.Brukernavn);
                    HttpContext.Session.SetString(_loggetInn, "");
                    return Ok(false);
                }
                HttpContext.Session.SetString(_loggetInn, "LoggetInn");
                return Ok(true);
            }
            _log.LogInformation("Feil i inputvalidering");
            return BadRequest("Feil i inputvalidering på server");
        }
        public void LoggUt()
        {
            HttpContext.Session.SetString(_loggetInn, "");
        }

    }
}