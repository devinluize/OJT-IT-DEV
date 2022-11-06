const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const NIMInput = document.querySelector('#NIM');
const jurusanInput = document.querySelector('#jurusan');
const regionInput = document.querySelector('#region');
const subdivInput = document.querySelector('#subdiv');
const alasanInput = document.querySelector('#alasan');
const SuksesInput = document.querySelector('#sukses');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        nama = usernameInput.value.trim();
        subdivisi = subdivInput.value.trim();
        region = regionInput.value.trim();
        email = emailInput.value.trim();
        printstr = console.log(`Halo! ${nama}, terima kasih telah mendaftar menjadi Nindya sebagai ${subdivisi} di ${region}. Pendaftaran anda telah tersimpan. Mohon tunggu email kami di ${email} dalam 10 hari kedepan.`);
        setSuccessAll(SuksesInput, printstr);
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //NAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Nama tidak boleh kosong');
    }else {
        setSuccess(usernameInput);
    }
    //NIM
    if(NIMInput.value.trim()==''){
        setError(NIMInput, 'NIM tidak boleh kosong');
    }else {
        setSuccess(NIMInput);
    }
    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Email tidak boleh kosong');
    }else if(emailInput.value.endsWith("@binus.ac.id")){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Harus menggunakan email binus (@binus.ac.id)');
    }
    //JURUSAN
    if(jurusanInput.value.trim()==''){
        setError(jurusanInput, 'Jurusan tidak boleh kosong');
    }else {
        setSuccess(jurusanInput);
    }
    //REGIONAL
    if(regionInput.value.trim()==''){
        setError(regionInput, 'Region tidak boleh kosong');
    }else {
        setSuccess(regionInput);
    }
    //SUBDIV
    if(subdivInput.value.trim()==''){
        setError(subdivInput, 'Subdivisi tidak boleh kosong');
    }else {
        setSuccess(subdivInput);
    }
    //ALASAN
    if(alasanInput.value.trim()==''){
        setError(alasanInput, 'Alasan tidak boleh kosong');
    }else {
        setSuccess(alasanInput);
    }
    
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccessAll(element, successMessage) {
    const parent = element.parentElement;
    parent.classList.add('successAll');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = successMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}




