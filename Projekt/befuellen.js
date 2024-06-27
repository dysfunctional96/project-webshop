function katalogBefuellen() {
    const katalog = new Katalog();

    // Produkte erstellen
    katalog.hinzufuegen(new Produkt('Laptop', 'Elektronik' || 'alle', '1', 999, 'Ein leistungsstarker Laptop', 'bilder/laptop.jpg'));
    katalog.hinzufuegen(new Produkt('Smartphone', 'Elektronik' || 'alle', '2', 799, 'Ein modernes Smartphone', 'bilder/smartphone.jpg'));
    katalog.hinzufuegen(new Produkt('Tablet', 'Elektronik' || 'alle', '3', 499, 'Ein handliches Tablet', 'bilder/tablet.jpg'));
    katalog.hinzufuegen(new Produkt('Kamera', 'Elektronik' || 'alle', '4', 399, 'Eine hochwertige Kamera', 'bilder/kamera.jpg'));

    katalog.hinzufuegen(new Produkt('Roman', 'Bücher' || 'alle', '5', 15, 'Ein spannender Roman', 'bilder/roman.jpg'));
    katalog.hinzufuegen(new Produkt('Kochbuch', 'Bücher' || 'alle', '6', 20, 'Ein hilfreiches Kochbuch', 'bilder/kochbuch.jpg'));
    katalog.hinzufuegen(new Produkt('Sachbuch', 'Bücher' || 'alle', '7', 25, 'Ein informatives Sachbuch', 'bilder/sachbuch.jpg'));
    katalog.hinzufuegen(new Produkt('Kinderbuch', 'Bücher' || 'alle', '8', 10, 'Ein unterhaltsames Kinderbuch', 'bilder/kinderbuch.jpg'));

    katalog.hinzufuegen(new Produkt('T-Shirt', 'Kleidung' || 'alle', '9', 19, 'Ein bequemes T-Shirt', 'bilder/tshirt.jpg'));
    katalog.hinzufuegen(new Produkt('Jeans', 'Kleidung' || 'alle', '10', 49, 'Eine robuste Jeans', 'bilder/jeans.jpg'));
    katalog.hinzufuegen(new Produkt('Jacke', 'Kleidung' || 'alle', '11', 89, 'Eine warme Jacke', 'bilder/jacke.jpg'));
    katalog.hinzufuegen(new Produkt('Schuhe', 'Kleidung' || 'alle', '12', 69, 'Ein paar bequeme Schuhe', 'bilder/schuhe.jpg'));

    return katalog;
}