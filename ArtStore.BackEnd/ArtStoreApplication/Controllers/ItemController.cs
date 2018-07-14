using ArtStore.BackEnd.ArtStoreApplication.Services;
using ArtStore.BackEnd.ArtStoreApplication.Services.Contracts;
using ArtStore.BackEnd.Server.Http.Contracts;
using ArtStore.BackEnd.Server.Http.Response;
using System;
using System.Collections.Generic;
using System.Text;

namespace ArtStore.BackEnd.ArtStoreApplication.Controllers
{
    public class ItemController : BaseController
    {
        private IItemService items;
        private IDictionary<string, string> parameters;

        public ItemController(IHttpRequest request) : base(request)
        {
            this.parameters = request.UrlParameters;
            this.items = new ItemService();
        }

        public IHttpResponse Item()
        {
            int id = -1;
            if (this.parameters.Keys.Contains("Id"))
            {
                int.TryParse(this.parameters["Id"], out id);
                if (id > -1)
                {
                    var item = this.items.GetById(id);
                    return this.JsonResponse(item);
                }
            }
            return new NotFoundResponse();
        }
    }
}
