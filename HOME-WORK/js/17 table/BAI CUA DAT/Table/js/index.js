let films = [
    {genre: "Film", title: "The Deer", duration: "6:24", date: "2014-02-28"},
    {genre: "Animation", title: "Wildfood", duration: "3:47", date: "2014-07-16"},
    {genre: "Film", title: "The Deer", duration: "6:24", date: "2014-02-28"},
    {genre: "Animation", title: "The Ghost", duration: "11:40", date: "2012-04-10"},
    {genre: "Film", title: "Animals", duration: "6:40", date: "2005-12-21"},
    {genre: "Btion", title: "Wagons", duration: "21:40", date: "2007-04-12"},
    {genre: "Animation", title: "The Ghost", duration: "11:40", date: "2012-04-10"},
    {genre: "Elm", title: "Animals", duration: "6:40", date: "2005-12-21"},
    {genre: "Animation", title: "Wagons", duration: "21:40", date: "2007-04-12"},
];

let cacheFilms = films;

let sortUp = function(listFilm, sortRow) {
    if (sortRow == "duration") {
        return listFilm.slice().sort(function(film1, film2) {
            var duration1 = film1[sortRow].split(":");
            var duration2 = film2[sortRow].split(":");
            var delta = duration1[0] - duration2[0];
            if (delta) return delta;
            else {
                delta = duration1[1] - duration2[1];
                return delta;
            }
        });
    }
    return listFilm.slice().sort(function(film1, film2) {
        if (film1[sortRow] > film2[sortRow]) return 1;
        else if (film1[sortRow] < film2[sortRow]) return -1;
        return 0;
    });
}

let sortDown = function(listFilm, sortRow) {
    if (sortRow == "duration") {
        return listFilm.slice().sort(function(film1, film2) {
            var duration1 = film1[sortRow].split(":");
            var duration2 = film2[sortRow].split(":");
            var delta = duration2[0] - duration1[0];
            if (delta) return delta;
            else {
                delta = duration2[1] - duration1[1];
                return delta;
            }
        });
    }
    return listFilm.slice().sort(function(film1, film2) {
        if (film1[sortRow] > film2[sortRow]) return -1;
        else if (film1[sortRow] < film2[sortRow]) return 1;
        return 0;
    });
}

let sortList = function(listFilm, el, sortFunction) {
    return sortFunction(listFilm, $(el).text().trim().toLowerCase());
}

let displayList = function(listFilms) {
    $("tr:not(.tableHead)").remove();
    listFilms.forEach(function(film) {
        $("tbody").append(`
            <tr>
                <td>${film['genre']}</td>
                <td>${film['title']}</td>
                <td>${film['duration']}</td>
                <td>${film['date']}</td>
            </tr>`
        );
    });
}

let findWithKeyWord = function(keyword) {
    return films.filter(function(film) {
        return (
            film['genre'].toLowerCase().includes(keyword.toLowerCase()) 
            || film['title'].toLowerCase().includes(keyword.toLowerCase()) 
            || film['duration'].includes(keyword) 
            || film['date'].includes(keyword)
        );
    });
}

displayList(films);

$("th").on("click", function() {
    $(this).siblings().data("type", "none");
    $(this).siblings().find("i.fa-sort-up").hide();
    $(this).siblings().find("i.fa-sort-down").hide();
    $(this).siblings().find("i.fa-sort").show();
    if ($(this).data("type") == "none") {
        $(this).data("type", "up");
        $(this).find("i.fa-sort").hide();
        $(this).find("i.fa-sort-up").show();
        displayList(sortList(cacheFilms, $(this), sortUp));
    }
    else if ($(this).data("type") == "up") {
        $(this).data("type", "down");
        $(this).find("i.fa-sort-up").hide();
        $(this).find("i.fa-sort-down").show();
        displayList(sortList(cacheFilms, $(this), sortDown));
    }
    else {
        $(this).data("type", "none");
        $(this).find("i.fa-sort-down").hide();
        $(this).find("i.fa-sort").show();
        displayList(cacheFilms);
    }
});

$(":input").on("input", function() {
    $("th").each(function(_, el) {
        $(el).data("type", "none");
        $(el).find("i.fa-sort-up").hide();
        $(el).find("i.fa-sort-down").hide();
        $(el).find("i.fa-sort").show();
    })
    cacheFilms = findWithKeyWord(this.value);
    displayList(cacheFilms);
})