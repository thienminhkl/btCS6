function ListPerson() {
    //thuộc tính
    this.perArr = [];

    //phương thức
    this.addPerson = function(person){
        this.perArr.push(person);
    }

    this.findIndexPerson = function(id){
        var indexFind = -1;
        indexFind = this.perArr.findIndex(function(person){
            return person.id == id;
        })
        return indexFind;
    }

    this.delPerson = function(id){
       var index = this.findIndexPerson(id);
        if(index != -1){
            this.perArr.splice(index, 1);
        }
    }

    this.updatePerson = function(person){
        var index = this.findIndexPerson(person.id);
        if(index != -1){
            this.perArr[index] = person;
        }
    }
}

ListPerson.prototype.searchName = function (keyword) {
    var resArr = [];
    var keywordLowerCase = keyword.toLowerCase();
    keywordLowerCase = keywordLowerCase.replace(/\s/g, "");

    this.perArr.map(function (person) {
        var nameLowerCase = person.name.toLowerCase().replace(/\s/g, "");

        if(nameLowerCase.indexOf(keywordLowerCase) > -1){
            resArr.push(person);
        }
    })

    return resArr;
}