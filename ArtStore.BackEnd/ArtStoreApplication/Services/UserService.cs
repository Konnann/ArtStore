namespace ArtStore.BackEnd.ArtStoreApplication.Services
{
    using ArtStore.BackEnd.ArtStoreApplication.Data.DTOs;
    using Contracts;
    using Data;
    using Data.Models;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System;

    public class UserService : IUserService
    {
        public bool Create(string username, string email, string firstname, string lastName, string password)
        {
            using (var db = new ArtStoreDbContext())
            {
                if (db.Users.Any(u => u.Username == username))
                {
                    return false;
                }

                var isAdmin = !db.Users.Any();
                    
                var user = new User
                {
                    Username = username,
                    Email = email,
                    FirstName = firstname,
                    LastName = lastName,
                    Password = password,
                    IsAdmin = isAdmin
                };

                db.Add(user);
                db.SaveChanges();
            }

            return true;
        }

        public bool Find(string username, string password)
        {
            using (var db = new ArtStoreDbContext())
            {
                return db.Users.Any(u => u.Username == username && u.Password == password);
            }
        }

        public bool IsAdmin(string username)
        {
            using (var db = new ArtStoreDbContext())
            {
                return db.Users.Any(u => u.Username == username && u.IsAdmin);
            }
        }

        public string All()
        {
            using (var db = new ArtStoreDbContext())
            {
                StringBuilder sb = new StringBuilder();

                var data = db.Users.Select(u => new UserDTO(u).ToJson()).ToList();
                sb.Append("{");
                sb.Append(string.Join(',', data));
                sb.Append("}");
                return sb.ToString();
            }
        }

        public static void Seed(ArtStoreDbContext db)
        {
            if (!db.Users.Any())
            {
                var users = new List<User>
                {
                    new User
                    {
                        Username = "Dannie",
                        Password = "123",
                        Email = "dannie@abv.bg",
                        FirstName = "Dannie",
                        LastName = "Vasileva",
                        IsAdmin = true
                    },
                    new User
                    {
                        Username = "ArtOfRai",
                        Password = "321",
                        Email = "art-of-rai@abv.bg",
                        FirstName = "Rali",
                        LastName = "Vasileva",
                        IsShopOwner = true
                    },
                    new User
                    {
                        Username = "MrCoolCat",
                        Password = "malkoKote",
                        Email = "kingIrl@gmail.com",
                        FirstName = "Arthur",
                        LastName = "The Cat",
                        IsShopOwner = true
                    },
                    new User
                    {
                        Username = "Siska",
                        Password = "123",
                        Email = "betterThanYou@mail.bg",
                        FirstName = "Sisi",
                        LastName = "The Cat",
                    },
                };

                db.AddRange(users);
                db.SaveChanges();
            }
        }
    }
}
