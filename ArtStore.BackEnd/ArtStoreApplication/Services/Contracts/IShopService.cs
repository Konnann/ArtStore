using ArtStore.BackEnd.ArtStoreApplication.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ArtStore.BackEnd.ArtStoreApplication.Services.Contracts
{
    public interface IShopService
    {
        string All();

        string GetById(int id);
    }
}
