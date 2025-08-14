document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const menuData = [
      {
        "nombre": "Ensalada del día",
        "categoria": "Entradas",
        "precios": [{ "size": "U", "precio": 75 }],
        "imagen": null
      },
      {
        "nombre": "Rollos primavera",
        "categoria": "Entradas",
        "precios": [
          { "size": "5_piezas", "precio": 90 },
          { "size": "10_piezas", "precio": 160 }
        ],
        "imagen": null
      },
      {
        "nombre": "Gyozas",
        "categoria": "Entradas",
        "precios": [
          { "size": "5_piezas", "precio": 90 },
          { "size": "10_piezas", "precio": 160 }
        ],
        "imagen": null
      },
      {
        "nombre": "Tonkotsu",
        "categoria": "Ramen",
        "precios": [
          { "size": "CH", "precio": 80 },
          { "size": "M", "precio": 130 },
          { "size": "G", "precio": 170 }
        ],
        "imagen": null
      },
      {
        "nombre": "Shoyu",
        "categoria": "Ramen",
        "precios": [
          { "size": "CH", "precio": 80 },
          { "size": "M", "precio": 130 },
          { "size": "G", "precio": 170 }
        ],
        "imagen": null
      },
      {
        "nombre": "Miso",
        "categoria": "Ramen",
        "precios": [
          { "size": "CH", "precio": 80 },
          { "size": "M", "precio": 130 },
          { "size": "G", "precio": 170 }
        ],
        "imagen": null
      },
      {
        "nombre": "Veggi",
        "categoria": "Ramen",
        "precios": [
          { "size": "CH", "precio": 80 },
          { "size": "M", "precio": 130 },
          { "size": "G", "precio": 170 }
        ],
        "imagen": null
      },
      {
        "nombre": "Especial",
        "categoria": "Ramen",
        "precios": [
          { "size": "CH", "precio": 80 },
          { "size": "M", "precio": 145 },
          { "size": "G", "precio": 185 }
        ],
        "imagen": null
      },
      {
        "nombre": "Pasta",
        "categoria": "Toppings extras",
        "precios": [{ "size": "U", "precio": 30 }],
        "imagen": null
      },
      {
        "nombre": "Proteína",
        "categoria": "Toppings extras",
        "precios": [{ "size": "U", "precio": 30 }],
        "imagen": null
      },
      {
        "nombre": "Verdura",
        "categoria": "Toppings extras",
        "precios": [{ "size": "U", "precio": 15 }],
        "imagen": null
      },
      {
        "nombre": "Shiitake (largo)",
        "categoria": "Toppings extras",
        "precios": [{ "size": "U", "precio": 20 }],
        "imagen": null
      },
      {
        "nombre": "Huevo",
        "categoria": "Toppings extras",
        "precios": [{ "size": "U", "precio": 15 }],
        "imagen": null
      },
      {
        "nombre": "Michi mochis",
        "categoria": "Postres",
        "precios": [{ "size": "U", "precio": 10 }],
        "imagen": null
      },
      {
        "nombre": "Mochi helado",
        "categoria": "Postres",
        "precios": [{ "size": "U", "precio": 40 }],
        "imagen": null
      },
      {
        "nombre": "Helado",
        "categoria": "Postres",
        "precios": [{ "size": "U", "precio": 55 }],
        "imagen": null
      }
    ];

    function renderMenu(menuItems) {
        const menuContainer = document.getElementById('menu-container');
        if (!menuContainer) return;

        const groupedMenu = menuItems.reduce((acc, item) => {
            const { categoria } = item;
            if (!acc[categoria]) {
                acc[categoria] = [];
            }
            acc[categoria].push(item);
            return acc;
        }, {});

        const sizeMap = {
            'U': '',
            'CH': 'CH',
            'M': 'M',
            'G': 'G',
            '5_piezas': '5 pzs',
            '10_piezas': '10 pzs',
        };

        let menuHTML = '';
        const categoryOrder = ["Entradas", "Ramen", "Toppings extras", "Postres"];

        categoryOrder.forEach(category => {
            if (groupedMenu[category]) {
                menuHTML += `<div class="menu-category"><h2>${category}</h2>`;
                groupedMenu[category].forEach(item => {
                    const prices = item.precios.map(p => {
                        const sizeName = sizeMap[p.size] ?? p.size;
                        return `${sizeName} $${p.precio}`.trim();
                    }).join(' / ');

                    menuHTML += `
                        <div class="menu-item-full">
                            <h3>${item.nombre}</h3>
                            <p>${prices}</p>
                        </div>
                    `;
                });
                menuHTML += `</div>`;
            }
        });
        menuContainer.innerHTML = menuHTML;
    }

    renderMenu(menuData);
});
