using ArtStore.BackEnd.ArtStoreApplication.Data.Models;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace ArtStore.BackEnd.ArtStoreApplication.Data.DTOs
{
    public class UserDTO: ModelDTO 
    {
        public UserDTO(User user)
        {
            this.Id = user.Id;
            this.Username = user.Username;
            this.FirstName = user.FirstName;
            this.LastName = user.LastName;
            this.Email = user.Email;
            this.Password = user.Password;
        }

        public string Username { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public bool IsAdmin { get; set; }
    }
}
