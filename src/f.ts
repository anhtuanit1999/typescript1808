interface HasName2 {
    lastname: string;
    firstname?: string;
}

const tuan: HasName2 = { lastname: 'Tuan' };

function showName(obj: HasName2) {
    console.log(`Chao ${obj.firstname} ${obj.lastname}`);
}
showName(tuan);