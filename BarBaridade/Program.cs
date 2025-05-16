using Microsoft.EntityFrameworkCore;
using BarBaridade;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlite("Data Source=bebidas.db"));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors((options) => 
{
    options.AddDefaultPolicy((policy) => 
    {
        policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors();

app.UseHttpsRedirection();

app.MapGet("/bebidas", (AppDbContext db) => {
    var bebidas = db.TabelaBebidas.ToList();
    return Results.Ok(bebidas);
});

app.MapGet("/bebidas/{id}", async (int id, AppDbContext db) => {
    var bebida = await db.TabelaBebidas.FindAsync(id);
    return bebida is not null ? Results.Ok(bebida) : Results.NotFound("Bebida não encontrada!");
});

app.MapPost("/bebidas", async (Bebida bebida, AppDbContext db) => {
    db.TabelaBebidas.Add(bebida);
    await db.SaveChangesAsync();
    return Results.Created($"/bebidas/{bebida.Id}", bebida);
});

app.MapPut("/bebidas/{id}", async (int id, Bebida updatedBebida, AppDbContext db) => {
    var existing = await db.TabelaBebidas.FindAsync(id);
    if (existing == null){
        return Results.NotFound("Bebida não encontrada!");
    }
    existing.Nome = updatedBebida.Nome;
    existing.TeorAlcoolico = updatedBebida.TeorAlcoolico;

    await db.SaveChangesAsync();
    return Results.Ok(existing);
});

app.MapDelete("/bebidas/{id}", async (int id, AppDbContext db) => {
    var bebida = await db.TabelaBebidas.FindAsync(id);
    if (bebida == null){
        return Results.NotFound("Bebida não encontrada!");
    }

    db.TabelaBebidas.Remove(bebida);
    await db.SaveChangesAsync();
    return Results.Ok("Bebida retirada do catálogo com sucesso!");
});

app.Run();