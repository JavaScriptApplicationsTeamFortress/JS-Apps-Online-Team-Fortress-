using System.Collections.Generic;
using System.Security.Claims;

namespace UserDataLayer
{
    public class ClaimWrapper
    {
        public ClaimWrapper()
        {
        }

        public ClaimWrapper(Claim claim)
        {
            this.Issuer = claim.Issuer;
            this.Type = claim.Type;
            this.Properties = claim.Properties;
            this.OriginalIssuer = claim.OriginalIssuer;
            this.Value = claim.Value;
            this.ValueType = claim.ValueType;
        }

        public string Issuer { get; set; }
        public string OriginalIssuer { get; private set; }
        public IDictionary<string, string> Properties { get; private set; }
        public string Type { get; private set; }
        public string Value { get; private set; }
        public string ValueType { get; private set; }

        public Claim Convert()
        {
            var claim = new Claim(this.Type, this.Value, this.ValueType, this.Issuer, this.OriginalIssuer);

            return claim;
        }
    }
}
