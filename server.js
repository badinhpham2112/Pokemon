const express = require('express');

const app = express();
const PORT = 8081;


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({
    extended: false

}));
// Dự liệu các Pokemon
const pokemonData = [{
        name: 'Bulbasaur',
        image: 'https://upload.wikimedia.org/wikipedia/vi/a/a9/Pok%C3%A9mon_Bulbasaur_001.png',
        description: 'Bulbasaur là một Pokemon nhỏ, bốn chân với màu xanh lá cây để da hơi xanh màu xanh lá cây và đen tối hơn các bản vá lỗi màu xanh lá cây. Nó có đôi mắt màu đỏ trắng và màng cứng nhọn, cấu trúc tai giống như ở trên đỉnh đầu của nó. Mõm ngắn và thẳng thừng, và nó có một cái miệng rộng. Một cặp nhỏ, chỉ có thể nhìn thấy răng ở hàm trên khi miệng của nó đang mở. Mỗi chân dày của nó với ba móng vuốt sắc nhọn. Ngày trở lại của nó là một bóng cây xanh, được phát triển từ một hạt giống trồng có lúc sinh. Bóng đèn điện cung cấp cho nó năng lượng thông qua quang hợp cũng như từ hạt giàu dinh dưỡng chứa trong đó.',
        evolutions: [{
                name_evolutions: 'Ivysaur',
                img_evolutions: 'https://gamelandvn.com/wp-content/uploads/anh/2016/07/160716_gamelandvn_pkm06_tintuc.jpg',
            },
            {
                name_evolutions: 'Venusaur',
                img_evolutions: 'https://upload.wikimedia.org/wikipedia/vi/f/fb/Venusaur_003.png',
            }
        ]
    },
    {
        name: 'Charmander',
        image: 'https://cmavn.org/wp-content/uploads/2017/06/9-buoc-ve-pokemon-charmander-that-de-dang-9.jpg',
        description: 'Hitokage (ヒトカゲ?) còn gọi là Charmander (/ˈtʃɑːrmændər/), là một loài Pokémon trong loạt Pokémon của Nintendo và Game Freak. Được tạo bởi Atsuko Nishida,[1] Hitokage xuất hiện lần đầu tiên trong các trò chơi video Pokémon Red và Blue và các phần tiếp theo, sau đó xuất hiện trong nhiều sản phẩm khác nhau, tựa đề spinoff và phim hoạt hình và in chuyển thể trong nhượng quyền thương mại. Mỗi con Hitokage đều có một ngọn lửa ở đuôi, ngọn lửa này thể hiện sức khoẻ cũng như tâm trạng của con Hitokage đó. Nếu ngọn lửa nhỏ đi thì sức khoẻ nó rất yếu và ngược lại ngọn lửa to thì nó đang rất sung sức.',
        evolutions: [{
                name_evolutions: 'Charmeleon',
                img_evolutions: 'https://vpokedex.com/wp-content/uploads/2022/11/Charmeleon-anime.png',
            },
            {
                name_evolutions: 'Charizard',
                img_evolutions: 'https://upload.wikimedia.org/wikipedia/vi/1/1f/Pok%C3%A9mon_Charizard_art.png',
            }
        ]
    },
    {
        name: 'PIKACHU',
        image: 'https://genk.mediacdn.vn/2019/7/17/2-15633486708292026445239.jpg',
        description: 'Pikachu là một loài gặm nhấm với thân hình lùn và nhỏ, được lấy cảm hứng từ loài sóc (Xem thêm: Ochotona). Pikachu rất dễ nhận ra bởi thân hình toàn màu vàng, với đôi tai dài và những sọc đen sau lưng, cạnh cái đuôi như tia điện xẹt. Pikachu sống thành đàn trong những khu rừng.',
        evolutions: [{
            name_evolutions: 'Raichu',
            img_evolutions: 'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/ddcfa379-6034-4cd6-8a4a-ede7a03aa37f?w=90&h=90',
        }]
    },
    {
        name: 'MELTAN',
        image: 'https://upload.wikimedia.org/wikipedia/vi/2/27/Meltan_and_Melmetal.png',
        description: 'Meltan là một Pokémon nhỏ có chiều cao 8 inch (0,20 m). Đầu của nó có hình dạng như một đai ốc màu vàng lục giác, bên trong có một mắt tròn, đen. Cơ thể của nó là một chất lỏng màu xám của thép lỏng, và nó có một đuôi phía sau nhô ra màu đỏ giống như một sợi dây điện.',
        evolutions: []
    },
    {
        name: 'TSUTARJA',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png',
        description: 'Tsutarja (ツタージャ Tsutāja) là Pokémon thuần hệ Co Cỏ được giới thiệu trong Thế hệ V. Nó tiến hóa thành Janovy ở cấp độ 17 và sau đó tiến hóa thành Jalorda ở cấp độ 36.',
        evolutions: [{
            name_evolutions: 'Snivy',
            img_evolutions: 'https://e7.pngegg.com/pngimages/795/573/png-clipart-serperior-moe-anthropomorphism-servine-snivy-pokemon-omega-ruby-and-alpha-sapphire-crazy-man-leaf-vertebrate-thumbnail.png',
        }]
    },
    {
        name: 'SQUIRTLE',
        image: 'https://gamek.mediacdn.vn/133514250583805952/2020/2/22/photo-2-1582306313239633504899.jpg',
        description: 'Thông tin: Squirtle là một Pokémon hệ Nước. Khi cần thiết, nó có thể rút mình vào vỏ sò và bơi trong nước',
        evolutions: [{
                name_evolutions: 'Wartortle',
                img_evolutions: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/a3bc17e6215031332462cc64e59b7922ddd14b91.png',
            },
            {
                name_evolutions: 'Blastoise',
                img_evolutions: 'https://img4.thuthuatphanmem.vn/uploads/2020/07/29/anh-pokemon-mega-blastoise-dep_043339191.jpg',
            }
        ]
    },
    {
        name: 'EEVEE',
        image: 'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/1fab9d9b86c9071e3f10c14b7869e3ec338f1429.png',
        description: 'Eevee là một Pokémon có khả năng tiến hóa đa dạng. Nó có lông mềm và dễ thương.',
        evolutions: [{
                name_evolutions: 'Vaporeon',
                img_evolutions: 'https://1.bp.blogspot.com/-WhyBRJAIHns/V7VpXyyRWzI/AAAAAAACVes/5fYCZT34ugUnxqTKlroyPvBfXruxyXMkACLcB/s1600/vaporeon-tong-quan-ve-pokemon-vaporeon-1.jpg',
            },
            {
                name_evolutions: 'Jolteon',
                img_evolutions: 'https://i.ytimg.com/vi/MSRcOcXiVXY/maxresdefault.jpg',
            },
            {
                name_evolutions: 'Flareon',
                img_evolutions: 'https://lh4.googleusercontent.com/-M8spgsr4sio/V8J1ouQT39I/AAAAAAACXEg/aHeICr1l7OA1TQYjgSCKZFlUBA6UQvqDgCLcB/s1600/pokemon-flareon-5.jpg',
            }
        ]
    },
    {
        name: 'TEPIG',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/498.png',
        description: 'Thông tin: Tepig là một Pokémon hệ Lửa. Nó có một cái mũi giống một cái mũ đen và có đặc điểm là lửa luôn cháy trên lưng.',
        evolutions: [{
                name_evolutions: 'Pignite',
                img_evolutions: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/1cd28ab410622799104688403306c7d08481cc03.png',
            },
            {
                name_evolutions: 'Emboar',
                img_evolutions: 'https://static.wikia.nocookie.net/pokemon/images/f/f9/Bianca_Emboar.png/revision/latest?cb=20150915055527',
            }
        ]
    },
    {
        name: 'SCRAGGY',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-switch/7/75/Scraggy.jpg',
        description: 'Scraggy là một Pokémon hệ Đá/Đánh đôi. Nó có thể gắng chống lại đối thủ bằng cách nâng cao hình dạng quần áo giả của nó..',
        evolutions: [{
            name_evolutions: 'Scrafty',
            img_evolutions: 'https://www.pngmart.com/files/22/Scrafty-Pokemon-PNG-Photos.png',
        }]
    },
    {
        name: 'PALPITOAD',
        image: 'https://static.pokemonpets.com/images/monsters-images-800-800/536-Palpitoad.webp',
        description: 'Palpitoad là một Pokémon hệ Nước/Đất. Nó có một cái mỏ giống một vòi rồng và có thể gọi ra các âm thanh cực mạnh thông qua lỗ mũi của nó.',
        evolutions: [{
            name_evolutions: 'Seismitoad',
            img_evolutions: 'https://www.pngmart.com/files/22/Seismitoad-Pokemon-PNG-Pic.png',
        }]
    },
    {
        name: 'ROGGENROLA',
        image: 'https://pokuniverse.com/wp-content/uploads/2022/07/Roggenrola-Guide--950x650.png',
        description: 'Roggenrola là một Pokémon hệ Đá. Nó có một quả cầu đá trên đầu và có thể thay đổi hình dạng để tăng cường sức mạnh tấn công và phòng thủ.',
        evolutions: [{
                name_evolutions: 'Boldore',
                img_evolutions: 'https://i.pinimg.com/originals/26/90/7c/26907c2292b65ea968c1f11155d17751.png',
            },
            {
                name_evolutions: 'Gigalith',
                img_evolutions: 'https://static.pokemonpets.com/images/monsters-images-800-800/526-Gigalith.webp',
            }
        ]
    },
    {
        name: 'SANDILE',
        image: 'https://dotesports.com/wp-content/uploads/2023/06/sandile-sunglasses-pokemon.jpg',
        description: 'Sandile là một Pokémon hệ Đất/Đen. Nó có thể ẩn mình trong cát và tấn công bất ngờ từ dưới lòng đất.',
        evolutions: [{
                name_evolutions: 'Krokorok',
                img_evolutions: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/8892641984b53913c621294dbe85ca6ec7103ff9.png',
            },
            {
                name_evolutions: 'Krookodile',
                img_evolutions: 'https://static1.dienanh.net/upload/202108/5016af39-fa44-497c-9a4e-02029267aebc.jpg',

            }
        ]
    },
    {
        name: 'SEWADDLE',
        image: 'https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season14/season14_ep19_ss01.jpg',
        description: 'Sewaddle là một Pokémon hệ Cỏ/Đá. Nó có một chiếc nơ giả trên đầu và có thể tạo ra lụa từ miếng lá để xây tổ.',
        evolutions: [{
                name_evolutions: 'Swadloon',
                img_evolutions: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/6292853d0aaee114dca27697c06f6ec7ed675088.png'
            },
            {
                name_evolutions: 'Leavanny',
                img_evolutions: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwffjNt71DUsRLErAkClCtN6Q9qSbnHyRy5LNU5T-yrfnXoIxVEmlf0hkhmZ8yZUougi8&usqp=CAU'
            },
        ]
    },
];

// Trang chủ
app.get('/', (req, res) => {
    res.render('pokemon', { POKEMON: pokemonData });
});


app.get('/pokemon/:name', (req, res) => {
    const { name } = req.params;

    // Tìm thông tin Pokemon theo tên
    const pokemon = pokemonData.find(p => p.name.toLowerCase() === name.toLowerCase());

    if (pokemon) {
        res.json(pokemon);
    } else {
        res.status(404).json({ error: 'Pokemon not found' });
    }
});


app.post('/pokemon/search', (req, res) => {
    const keyword = req.body.keyword;
    if (keyword) {
        const results = pokemonData.filter(pokemon =>
            pokemon.name.toLowerCase().includes(keyword.toLowerCase())
        );
        res.render('results', { keyword, results });
    } else {
        // Xử lý khi không có từ khóa được gửi đi
        res.render('error', { message: "No keyword provided" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});