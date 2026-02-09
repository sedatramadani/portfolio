using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly ApiContext _context;

        public FormController(ApiContext context)
        {
            _context = context;

            // Seed default user if database empty
            if (!_context.Forms.Any())
            {
                _context.Forms.Add(new Form
                {
                    Name = "Sedat",
                    Email = "sedat@mail.com",
                    Message = "Hello from backend"
                });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            // Return first user only (React expects an object, not array)
            var user = _context.Forms.FirstOrDefault();
            if (user == null)
                return NotFound("No user in database");
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Post(Form form)
        {
            if (form == null)
                return BadRequest("Invalid form");

            _context.Forms.Add(form);
            _context.SaveChanges();
            return Ok(form);
        }
    }
}
