using System;
using System.Collections.Generic;
using System.Text;

namespace ArtStore.BackEnd.Server.Http.Response
{
    using Enums;
    using Exceptions;
    using Server.Contracts;
    public class JsonResponse : HttpResponse
    {
        private readonly string data;

        public JsonResponse(HttpStatusCode statusCode, string data)
        {
            this.ValidateStatusCode(statusCode);

            this.data = data;
            this.StatusCode = statusCode;

            this.Headers.Add(HttpHeader.ContentType, "application/json");
        }

        private void ValidateStatusCode(HttpStatusCode statusCode)
        {
            var statusCodeNumber = (int)statusCode;

            if (299 < statusCodeNumber && statusCodeNumber < 400)
            {
                throw new InvalidResponseException("Json responses need a status code below 300 and above 400 (inclusive).");
            }
        }

        public override string ToString()
        {
            return $"{base.ToString()}{this.data}";
        }
    }
}
