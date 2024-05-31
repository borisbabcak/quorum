using Microsoft.AspNetCore.Mvc;

namespace Quorum.Server.Controllers
{
    // To learn how to add more BE endpoints and how the .Net Core works check out this tutorial (and pages around it):
    // https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/adding-controller?view=aspnetcore-8.0&tabs=visual-studio

    [ApiController]
    [Route("/[controller]")]
    public class TemplatesController : ControllerBase
    {
        [HttpGet]
        public string Index()
        {
            Console.WriteLine("Index called");
            return "Test";
        }

        [HttpGet("{name}")]
        public string Get(string name)
        {
            Console.WriteLine($"{name}");
            return name;
        }
    }
}
