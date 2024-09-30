
function fetchData() {
    axios.get('http://localhost:5000/api/ad-soyad-maas')
    .then(response =>{
        console.log(response.data)
        const data = response.data
        const tbody = $('#data-body')
    tbody.empty();
    const rows = data.map(item => `
        <tr>
            <th>${item.id}</th>
            <th>${item.ad}</th>
            <th>${item.soyad}</th>
            <th>${item.maas}</th>
            <th>${item.published}</th>
            <th>
                <button type="button" class="btn btn-primary btn-sm" onclick="editData(${item.id})" data-toggle="modal" data-target="#exampleModal2">
                    <span class="glyphicon glyphicon-pencil"></span>
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteData(${item.id})">
                    <span class="glyphicon glyphicon-trash"></span>
                </button>
            </th>
        </tr>
    `).join('') 
    
    tbody.append(rows)
    
}).catch(error =>{
    console.log(error)
})
}

    fetchData()


function addData() {
const ad = $('#ad').val()
const soyad = $('#soyad').val()
const maas = $('#maas').val()
const published = $('#published').val()

axios.post('/api/ad-soyad-maas/create', { ad, soyad, maas, published })
    .then(response => {
        console.log('Kayıt eklendi:', response.data)
        $('#exampleModal').modal('hide')
        fetchData()
    })
    .catch(error => {
        console.error('Hata:', error)
    });
}

function deleteData(id) {
const confirmation = confirm(`ID: ${id} olan veriyi silmek istediğinizden emin misiniz?`)
if (confirmation) {
    axios.delete(`http://localhost:5000/api/ad-soyad-maas/delete/${id}`)
        .then(response => {
            console.log(`Silme başarılı: ${id}`)
            fetchData()
        })
        .catch(error => {
            console.log(error)
        });
}
}

function editData(id) {
axios.get(`http://localhost:5000/api/ad-soyad-maas/${id}`)
    .then(response => {
        const item = response.data
        $('#editId').val(item.id)
        $('#editAd').val(item.ad)
        $('#editSoyad').val(item.soyad)
        $('#editMaas').val(item.maas)
        $('#editPublished').val(item.published)
    })
    .catch(error => {
        console.log(error)
    })
}

function updateData() {
const id = $('#editId').val()
const ad = $('#editAd').val()
const soyad = $('#editSoyad').val()
const maas = $('#editMaas').val()
const published = $('#editPublished').val()

axios.put(`http://localhost:5000/api/ad-soyad-maas/edit/${id}`, { ad, soyad, maas, published })
    .then(response => {
        console.log(`Düzenleme başarılı: ${id}`)
        fetchData()
        $('#exampleModal2').modal('hide')
    })
    .catch(error => {
        console.log(error)
    });
}