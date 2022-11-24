using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace UfoApp2.Models
{
    public class Observasjoner
    {
        public int id { get; set; }
        [RegularExpression(@"^[a-zA-zæøåÆØÅ0-9. \-]{2,50}$")]
        public string tittel { get; set; }
        [RegularExpression(@"^[a-zA-zæøåÆØÅ0-9. \-]{2,20}$")]
        public string sted { get; set; }
        [RegularExpression(@"^[0-9. \-]{6,8}$")]
        public string dato { get; set; }
        [RegularExpression(@"^[a-zA-zæøåÆØÅ0-9. \-]{2,100}$")]
        public string beskrivelse { get; set; }
    }

    public class Brukere
    {
        public int Id { get; set; }
        public string Brukernavn { get; set; }
        public byte[] Passord { get; set; }
        public byte[] Salt { get; set; }
    }

    public class UfoContext : DbContext
    {
        public UfoContext(DbContextOptions<UfoContext> options)
                : base(options)
        {
            // denne brukes for å opprette databasen fysisk dersom den ikke er opprettet
            // dette er uavhenig av initiering av databasen (seeding)
            // når man endrer på strukturen på KundeContxt her er det fornuftlig å slette denne fysisk før nye kjøringer
            Database.EnsureCreated();
        }

        public DbSet<Observasjoner> ObservasjonerUFO { get; set; }
        public DbSet<Brukere> Brukere { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // må importere pakken Microsoft.EntityFrameworkCore.Proxies
            // og legge til"viritual" på de attriuttene som ønskes å lastes automatisk (LazyLoading)
            optionsBuilder.UseLazyLoadingProxies();
        }

    }
}
