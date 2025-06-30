// Wallet Connection
document.querySelector('.wallet-connect').addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            alert(`Connected: ${accounts[0]}`);
        } catch (error) {
            console.error("Error connecting:", error);
        }
    } else {
        alert("Please install MetaMask!");
    }
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const target = +counter.innerText;
    const increment = target / speed;
    let count = 0;
    
    const updateCount = () => {
        if (count < target) {
            counter.innerText = Math.ceil(count);
            count += increment;
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCount();
});
