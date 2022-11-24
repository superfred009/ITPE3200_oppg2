using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using UfoApp2.DAL;
using UfoApp2.Models;

namespace UfoApp2.Model
{
    public class Class DBInit
    {
        public static void Initialize(IApplicationBuilder app)
    {
        var serviceScope = app.ApplicationServices.CreateScope();

        var db = serviceScope.ServiceProvider.GetService<UfoContext>();

        db.Database.EnsureDeleted();
        db.Database.EnsureCreated();

        //Lage bruker
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

