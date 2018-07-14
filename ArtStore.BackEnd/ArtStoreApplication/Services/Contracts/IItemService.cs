using ArtStore.BackEnd.ArtStoreApplication.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ArtStore.BackEnd.ArtStoreApplication.Services.Contracts
{
    public interface IItemService
    {
        bool Create(string title, string description, decimal price, int sellerId);

        string GetById(int id);

        string All();
    }
}
