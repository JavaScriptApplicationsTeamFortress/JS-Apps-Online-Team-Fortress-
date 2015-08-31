namespace CV_Generator.Models
{
    public class CertificateModels
    {
        public string DateAccuired { get; set; }
        public string ValidTo { get; set; }
        public string CertificateName { get; set; }
        public string CertificateType { get; set; }
        public byte[] Attachment { get; set; }
    }
}