namespace Quorum.Server.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System.Threading.Tasks;
    using Quorum.Server.Models;
    using System;

    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LoginController(AppDbContext context)
        {
            _context = context;
        }

        // GET endpoint to display the login page
        [HttpGet]
        public IActionResult GetLoginPage()
        {
            Console.WriteLine("GetLoginPage called");
            try
            {
                return Ok("Login page");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }

        // POST endpoint to handle login
        [HttpPost]
        public async Task<IActionResult> Login([FromForm] Login login)
        {
            var user = await _context.Logins
                .FirstOrDefaultAsync(u => u.Username == login.Username && u.Password == login.Password);

            if (user == null)
            {
                return Unauthorized();
            }

            Console.WriteLine("Login successful");
            Response.Headers.Add("message", "Login successful");
            return Redirect("/home");
        }
    }
}