using Castle.Core.Logging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.Extensions.Logging;
using Moq;
using System;
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
                beskrivelse = "UFO landa på Oslomet"
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

        }

        [Fact]
        public async Task Observasjon_Slett_Test()
        {

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
                beskrivelse = "UFO landa på Oslomet"
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