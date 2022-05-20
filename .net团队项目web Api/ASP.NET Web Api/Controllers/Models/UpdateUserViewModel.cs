using ASP.NET_Web_Api.Data.Models;
using System.ComponentModel.DataAnnotations;

namespace ASP.NET_Web_Api.Controllers.Models
{
    public class UpdateUserViewModel
    {
        [Required]
        public User Target { get; set; }
        [Required]
        public string Username { get; set; }
    }
}
