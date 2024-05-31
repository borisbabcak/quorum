namespace Quorum.Server.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System.Threading.Tasks;
    using Quorum.Server.Models;
    using System;

    [ApiController]
    [Route("[controller]")]
    public class SignUpController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SignUpController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetSignUpPage()
        {
            Console.WriteLine("GetSignUpPage called");
            try
            {
                return Ok("Sign up page");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpPost]
        public async Task<IActionResult> SignUp([FromForm] User newUser)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == newUser.Email);

            if (user != null)
            {
                return Conflict(new { Message = "Email already exists" });
            }

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            Console.WriteLine("Sign up successful");
            return Redirect("/home");
        }
    }
}