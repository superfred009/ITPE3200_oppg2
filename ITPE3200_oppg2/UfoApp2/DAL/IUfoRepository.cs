using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UfoApp2.Models;

namespace UfoApp2.Models
{
    public interface IUfoRepository
    {
        Task<bool> Lagre(Observasjon innObservasjon);
        Task<List<Observasjon>> HentAlle();
        Task<bool> neste(int id);
        Task<bool> forrige(int id);
        Task<bool> Slett(int id);
        Task<Observasjon> HentEn(int id);
        Task<bool> Endre(Observasjon endreObservasjon);
    }
}