using Castle.Core.Logging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.Extensions.Logging;
using Moq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using UfoApp2.Controllers;
using UfoApp2.Models;
using Xunit;

namespace UfoTesting
{
    public class UfoTest
    {
        [Fact]
        public async Task Observasjon_Lagre_Test()
        {
            // Arrange
            var innObservasjon = new Observasjon
            {
                id = 1,
                tittel = "UFO Landing",
                sted = "Oslo",
                dato = "16.11.2022",
                beskrivelse = "UFO landa p� Oslomet"
            };
            var mockObs = new Mock<IUfoRepository>();
            mockObs.Setup(o => o.Lagre(innObservasjon)).ReturnsAsync(true);
            var mockLog = new Mock<ILogger<UfoController>>();
            ILogger<UfoController> logger = mockLog.Object;
            var ufoController = new UfoController(mockObs.Object, logger);
            // Act
            var result = await ufoController.Lagre(innObservasjon);
            // Assert
            Assert.NotNull(result);
        }

        [Fact]
        public async Task Observasjon_HentAlle_Test()
        {
            var observasjon1 = new Observasjon
            {
                id = 1,
                tittel = "UFO Landing",
                sted = "Oslo",
                dato = "16.11.2022",
                beskrivelse = "UFO landa p� Oslomet"
            };
            var observasjon2 = new Observasjon
            {
                id = 2,
                tittel = "UFO på sopra steria",
                sted = "Oslo",
                dato = "01.10.2022",
                beskrivelse = "Landa en UFO på sopra steria sitt hovedkontor"
            };
            var observasjon3 = new Observasjon
            {
                id = 3,
                tittel = "UFO i Odda",
                sted = "Odda",
                dato = "07.10.2022",
                beskrivelse = "UFO i Odda"
            };

            var observasjon4 = new Observasjon
            {
                id = 4,
                tittel = "UFO sett svevende over sport 33",
                sted = "Oslo",
                dato = "22.09.2022",
                beskrivelse = "UFO"
            };

            var observasjonListe = new List<Observasjon>();
            observasjonListe.Add(observasjon1);
            observasjonListe.Add(observasjon2);
            observasjonListe.Add(observasjon3);
            observasjonListe.Add(observasjon4);

            var mockObs = new Mock<IUfoRepository>();
            mockObs.Setup(k => k.HentAlle()).ReturnsAsync(() => null);
            var mockLog = new Mock<ILogger<UfoController>>();
            ILogger<UfoController> logger = mockLog.Object;
            UfoController service = new UfoController(mockObs.Object, logger);
            var result = await service.HentAlle() as ObjectResult;
            var actualResult = result.Value;
            Assert.Equal<List<Observasjon>>(observasjonListe, (List<Observasjon>)actualResult);
        }

        [Fact]
        public async Task Observasjon_Slett_Test()
        {
            var mock = new Mock<IUfoRepository>();
            mock.Setup(k => k.Slett((1))).ReturnsAsync(true);
            var mockLog = new Mock<ILogger<UfoController>>();
            ILogger<UfoController> logger = mockLog.Object;
            UfoController service = new UfoController(mock.Object, logger);
            var resultat = await service.Slett(1) as ObjectResult;
            var actualResult = resultat.Value;
            Assert.True((bool)actualResult);


        }

        [Fact]
        public async Task Observasjon_HentEn_Test()
        {
            Observasjon observasjon = new Observasjon()
            {
                id = 1,
                tittel = "UFO Landing",
                sted = "Oslo",
                dato = "16.11.2022",
                beskrivelse = "UFO landa p� Oslomet"
            };
            var mockObs = new Mock<IUfoRepository>();
            mockObs.Setup(o => o.HentEn(observasjon.id)).ReturnsAsync(observasjon);
            var mockLog = new Mock<ILogger<UfoController>>();
            ILogger<UfoController> logger = mockLog.Object;
            UfoController service = new UfoController(mockObs.Object, logger);
            var result = await service.HentEn(observasjon.id) as ObjectResult;
            var actualResult = result.Value;
            Assert.NotNull(actualResult);
        }
    }
}