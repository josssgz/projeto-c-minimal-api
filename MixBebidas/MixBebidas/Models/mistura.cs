using System.Collections.Generic;

namespace MixBebidas.Models
{
    /// <summary>
    /// cod de drink/ mistura criado pelo user
    /// </summary>
    public class Mistura
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string CorHex { get; set; } = "#FFFFFF";
        public string Descricao { get; set; } = string.Empty;
        
        public ICollection<MisturaBebida> MisturasBebidas { get; set; } = new List<MisturaBebida>();
    }
}