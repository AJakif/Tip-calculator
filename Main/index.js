const BillAmount = document.querySelector('#bill')
const Tipcontainer = document.querySelector('.tip--container')
const TipSelect = document.querySelectorAll('.select')
const NoofPerson = document.querySelector('#person')
const Total = document.querySelector('.total')
const ResetBtn = document.querySelector('.reset')
const Custom = document.querySelector('#custom')
let TipC;

BillAmount.addEventListener('input', SetTotal)
ResetBtn.addEventListener('click', ResetEveryThing)

const RenderTotal = () => {
    document.querySelector('.total').textContent = FinalTip(TipC, BillAmount.value, NoofPerson.value)

    document.querySelector('.tip').textContent = CalculateTip(TipC) / NoofPerson.value

}

const AddErrorZero = () => {

    document.querySelector('.error').classList.remove('d-none')
    NoofPerson.classList.add('animate__shakeX')
    NoofPerson.style.outlineColor = '#ff6c6c'
}

const removeErrorZero = () => {
    document.querySelector('.error').classList.add('d-none')
    NoofPerson.classList.remove('animate__shakeX')
    NoofPerson.style.outlineColor = '#27c1ac'
}

const AddAlphabetErr=()=>{
    
    document.querySelector('.error-neg-no').classList.remove('d-none')
    NoofPerson.classList.add('animate__shakeX')
    NoofPerson.style.outlineColor = '#ff6c6c'
}
const RemoveAlpha=()=>{
    document.querySelector('.error-neg-no').classList.add('d-none')
    NoofPerson.classList.remove('animate__shakeX')
    NoofPerson.style.outlineColor = '#27c1ac'
}
const InitTotal = () => {
    document.querySelector('.total').textContent == "" ? this.textContent = `$00.00` : Total

    document.querySelector('.tip').textContent = `$00.00`
}
function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }

// Tip
Tipcontainer.addEventListener('click', (e) => {
    const Link = e.target.closest('.select')
    if (Link) {
        TipSelect.forEach((val, i, arr) => {
            val.classList.remove('active-tip')

        })


        Link.classList.add('active-tip')

        TipC = Link.dataset.tip

        if (NoofPerson.value != 0) {
            RenderTotal()

        }



    }

})


// Custom Tip
Custom.addEventListener('input', (e) => {
    if (ResetBtn.classList.contains('disable')) {
        ResetBtn.classList.remove('disable')
    }

    TipSelect.forEach((val, i, arr) => {
        val.classList.remove('active-tip')

    })
   


    TipC = e.target.value
    if (NoofPerson.value != 0) {

        RenderTotal()
    }

})


// NO OF PEOPLE
NoofPerson.addEventListener('input', (e) => {
    if (ResetBtn.classList.contains('disable')) {
        ResetBtn.classList.remove('disable')
    }
    const Checkerror = document.querySelector('.error').classList
    const CheckerrorA = document.querySelector('.error-neg-no').classList

    if (isLetter(NoofPerson.value) || NoofPerson.value < 0) {
        // Logic for not letting user type alhpabet
        AddAlphabetErr()
      
    } else {
        if (!CheckerrorA.contains('d-none')) {
            // RemoveAplhpaError
            RemoveAlpha()
        }

        let Total = document.querySelector('#bill').value
       

        if (ResetBtn.classList.contains('disable')) {
            ResetBtn.classList.remove('disable')
        }
        





        if (NoofPerson.value != 0) {

            if (TipC == undefined && Total == "") {

                InitTotal()

            } else {

                RenderTotal()

            }



            if (!Checkerror.contains('d-none')) {
                removeErrorZero()
            }


        } else if (NoofPerson.value == 0) {

            const Checkerror = document.querySelector('.error').classList

            if (Checkerror.contains('d-none')) {

                AddErrorZero()

            } else {
                document.querySelector('.error').classList.add('d-none')

            }
            InitTotal()


        }

    }



})



function SetTotal(e) {
    const ERR_neg = document.querySelector('.error-neg')
    if (e.target.value < 0 || isLetter(e.target.value)) {

        ERR_neg.classList.remove('d-none')
        BillAmount.classList.add('animate__shakeX')
        BillAmount.style.outlineColor = '#ff6c6c'


    } else {
        if (NoofPerson.value != "" && TipC != undefined) {

            RenderTotal()

        } else {

            if (e.target.value == "") {
                Total.textContent = `$` + `00.00`
            } else {
                Total.textContent = `$` + e.target.value
                const ResetBtn = document.querySelector('.reset')
            }


            if (ResetBtn.classList.contains('disable')) {
                ResetBtn.classList.remove('disable')
            }

        }

        ERR_neg.classList.add('d-none')
        BillAmount.classList.remove('animate__shakeX')
        BillAmount.style.outlineColor = '#27c1ac'
    }
}

const CalculateTip = (tip,) => {
    const Tip = (BillAmount.value / 100) * tip;
    return Tip.toFixed(2)



}

const FinalTip = (tip, bill, NumofPep) => {

    const firstLev = bill / NumofPep
    const secondLev = firstLev + CalculateTip(tip) / NumofPep

    return secondLev.toFixed(2)


}


function ResetEveryThing(e) {

    TipSelect.forEach((val, i, arr) => {
        val.classList.remove('active-tip')

    })
    NoofPerson.value = ""
    BillAmount.value = ""

    document.querySelector('.total').textContent = `$00.00`
    document.querySelector('.tip').textContent = `$00.00`

    if (!e.target.classList.contains('disable')) {
        e.target.classList.add('disable')

    }

    const err = document.querySelector('.error')
    if (!err.classList.contains('d-none')) {
        err.classList.add('d-none')
    }

    const err_Neg=document.querySelector('.error-neg-no')
    if(!err_Neg.classList.contains('d-none')){
        err_Neg.classList.add('d-none')
    }

    if (NoofPerson.classList.contains('animate__shakeX')) {
        NoofPerson.classList.remove('animate__shakeX')
    }

    if (Custom.value) {
        Custom.value = ""
    }
    NoofPerson.style.outlineColor = '#27c1ac'



}

