using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UfoApp2.Models;
using UfoApp2.Model;

namespace UfoApp2.Models
{
    public interface IUfoRepository
    {
        Task<bool> Lagre(Observasjon innObservasjon);
        Task<List<Observasjon>> HentAlle();
        Task<bool> Slett(int id);
        Task<Observasjon> HentEn(int id);
        Task<bool> Endre(Observasjon endreObservasjon);
        Task<bool> LoggInn(Bruker Bruker);
    }
}