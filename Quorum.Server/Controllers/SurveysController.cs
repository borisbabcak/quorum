using Microsoft.AspNetCore.Mvc;
using Quorum.Server.Models;

namespace Quorum.Server.Controllers;

[ApiController]
[Route("/[controller]")]
public class SurveysController : ControllerBase
{
    [HttpGet("CreateNewSurvey")]
    public IActionResult CreateNewSurvey()
    {
        Console.WriteLine("CreateNewSurvey called");
        try
        {
            Redirect("/CreateNewSurvey");
            return Ok(); // Simulated success response
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
            return StatusCode(500, "Internal Server Error");
        }
    }
}
