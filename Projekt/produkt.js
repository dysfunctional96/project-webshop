class Produkt {
    constructor(name, kategorie, produktNummer, preis, kurzbeschreibung = '', foto = '') {
        this.name = name;
        this.kategorie = kategorie;
        this.produktNummer = produktNummer;
        this.preis = preis;
        this.kurzbeschreibung = kurzbeschreibung;
        this.foto = foto;
    }


    kurzansicht() {
        return `
            <div class="produkt">
                <input type="checkbox" name="produkt" value="${this.produktNummer}">
                    <h3>${this.name}</h3>
                    <p><strong>Preis:</strong> ${this.preis.toFixed(2)} €</p>
                    ${this.foto ? `<img src="${this.foto}" alt="${this.name}">` : ''};
                    ${this.kurzbeschreibung ? `<p>${this.kurzbeschreibung}</p>` : ''};
                </div>
        `;
    }

    detailansicht() {
        return `
                <div class="produkt-detail">
                    <h2>${this.name}</h2>
                    <p><strong>Kategorie:</strong> ${this.kategorie}</p>
                    <p><strong>Produktnummer:</strong> ${this.produktNummer}</p>
                    <p><strong>Preis:</strong> ${this.preis.toFixed(2)} €</p>
                    ${this.foto ? `<img src="${this.foto}" alt="${this.name}">` : ''}
                    ${this.kurzbeschreibung ? `<p>${this.kurzbeschreibung}</p>` : ''}
                </div>
            `;
    }
}
