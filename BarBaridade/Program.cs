using Microsoft.EntityFrameworkCore;
using BarBaridade;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlite("Data Source=bebidas.db"));

var app = builder.Build();

app.MapGet("/bebidas", (AppDbContext db) => {
    var bebidas = db.TabelaBebidas.ToList();
    return Results.Ok(bebidas);
});

app.MapGet("/bebidas/{id}", async (int id, AppDbContext db) => {
    var bebidas = await db.TabelaBebidas.FindAsync(id);
    return bebidas is not null ? Results.Ok(bebidas) : Results.NotFound("Bebida não encontrada!");
});

app.MapPost("/bebidas", async (Bebida bebida, AppDbContext db) => {
    db.TabelaBebidas.Add(bebida);
    await db.SaveChangesAsync();
    return Results.Created($"/bebidas/{bebida.Id}", bebida);
});

app.Run();