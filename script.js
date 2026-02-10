// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-fixed');
    const scrollPosition = window.scrollY;
    
    if (!header) return;
    
    // Mostrar o header fixo quando rolar mais de 200px
    if (scrollPosition > 200) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
    
    // Adicionar classe 'scrolled' para diminuir o logo quando rolar mais
    if (scrollPosition > 400) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Formulário de Contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        employees: document.getElementById('employees').value,
        whatsapp: document.getElementById('whatsapp').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value
    };
    
    // Formatar mensagem para WhatsApp
    const whatsappMessage = `
🎯 *Nova Solicitação - Palestra SIPAT com Óculos 3D*

📝 *Nome:* ${formData.name}
🏢 *Empresa:* ${formData.company || 'Não informado'}
👥 *Nº de Funcionários:* ${formData.employees}
📱 *WhatsApp:* ${formData.whatsapp}
📧 *Email:* ${formData.email}
💬 *Mensagem:* ${formData.message || 'Sem mensagem adicional'}

_Enviado via Landing Page SIPAT - Instituto Gaia Soul_
    `.trim();
    
    // Número do WhatsApp (substitua pelo número real)
    const whatsappNumber = '5511999999999'; // Formato: código país + DDD + número
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Salvar dados no localStorage para usar na página de obrigado
    localStorage.setItem('leadData', JSON.stringify(formData));
    
    // Redirecionar para página de obrigado
    window.location.href = 'obrigado.html';
});

// Máscara para telefone
document.getElementById('whatsapp').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    }
    
    e.target.value = value;
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy loading para vídeo em mobile
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video');
    
    // Otimizações de vídeo
    if (video) {
        // Pausar vídeo em mobile para economizar dados
        if (window.innerWidth < 768) {
            video.pause();
            video.removeAttribute('autoplay');
        }
        
        // Ajustar qualidade do vídeo baseado na conexão
        if ('connection' in navigator) {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (connection) {
                // Pausar em conexões muito lentas
                if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                    video.style.display = 'none';
                    video.pause();
                }
                // Reduzir taxa de quadros em conexões lentas
                else if (connection.effectiveType === '3g') {
                    video.playbackRate = 0.75;
                }
            }
        }
        
        // Otimizar reprodução
        video.addEventListener('loadeddata', function() {
            // Garantir que o vídeo comece suavemente
            video.play().catch(function(error) {
                console.log('Autoplay prevented:', error);
            });
        });
        
        // Pausar quando não estiver visível
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                video.pause();
            } else if (window.innerWidth >= 768) {
                video.play();
            }
        });
    }
});

// Animação de fade-in ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos que devem animar
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.benefit-card, .step-card, .testimonial-card, .authority-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contadores animados para a seção de impacto
function animateCounter(element, target, suffix = '') {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString('pt-BR') + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString('pt-BR') + suffix;
        }
    }, 16);
}

// Observar seção de impacto
const impactObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.impact-number[data-target]');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                let suffix = '';
                
                if (target === 10000) suffix = '+';
                if (target === 500) suffix = '+';
                if (target === 95) suffix = '%';
                if (target === 100) suffix = '%';
                
                animateCounter(counter, target, suffix);
            });
            impactObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', function() {
    const impactSection = document.querySelector('.impact-section');
    if (impactSection) {
        impactObserver.observe(impactSection);
    }
});

// Validação de email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validação adicional do formulário
document.getElementById('email').addEventListener('blur', function() {
    if (this.value && !validateEmail(this.value)) {
        this.style.borderColor = '#ff4444';
        this.setCustomValidity('Por favor, insira um email válido');
    } else {
        this.style.borderColor = '#e0e0e0';
        this.setCustomValidity('');
    }
});

// Função opcional para enviar dados para backend
function sendToBackend(formData) {
    // Exemplo de envio para API
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Google Analytics ou Facebook Pixel (adicionar seus IDs)
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'SEU-ID-GA');

// Rastreamento de cliques em CTAs
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        console.log('CTA Clicked:', buttonText);
        
        // Enviar evento para Google Analytics
        // gtag('event', 'cta_click', {
        //     'event_category': 'engagement',
        //     'event_label': buttonText
        // });
    });
});

// Prevenção de spam no formulário
let formSubmitCount = 0;
const maxSubmits = 3;

document.getElementById('contactForm').addEventListener('submit', function(e) {
    formSubmitCount++;
    
    if (formSubmitCount > maxSubmits) {
        e.preventDefault();
        alert('Você já enviou várias solicitações. Por favor, aguarde nosso contato.');
        return false;
    }
});
