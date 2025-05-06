using System.Collections.Generic;

namespace MixBebidas.Models
{
    /// <summary>
    /// cod de bebidas fixas
    /// </summary>
    public class Bebida
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string CorHex { get; set; } = "#FFFFFF";
        public string Tipo { get; set; } = string.Empty;

        public ICollection<MisturaBebida> MisturasBebidas { get; set; } = new List<MisturaBebida>();
    }
}
