using ArtStore.BackEnd.ArtStoreApplication.Data.Models;
using System.Collections;
using System.Collections.Generic;

namespace ArtStore.BackEnd.ArtStoreApplication.Services.Contracts
{
    public interface IUserService
    {
        bool Create(string username, string email, string firstName, string lastName, string password);

        bool Find(string email, string password);

        bool IsAdmin(string email);

        string All();
    }
}
