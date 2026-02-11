// Script específico para a página do Meta Ads (Facebook/Instagram)
// Webhook N8N: https://mediagrowth-n8n.63kuy3.easypanel.host/webhook-test/ce894299-75b9-46a9-bc90-8cc8565530ab

// Otimização do vídeo hero para garantir fluidez perfeita
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        // Garantir que o vídeo seja reproduzido de forma fluida
        heroVideo.addEventListener('loadeddata', function() {
            this.play().catch(function(error) {
                console.log('Autoplay impedido, tentando novamente:', error);
            });
        });
        
        // Garantir loop perfeito sem interrupções
        heroVideo.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        
        // Garantir que o vídeo continue tocando mesmo após mudança de aba
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden && heroVideo.paused) {
                heroVideo.play();
            }
        });
    }
});

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

// Formulário de Contato - META ADS
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Coletar dados do formulário
    const formData = {
        origem: 'Meta Ads',  // Identificação da origem
        name: document.getElementById('name').value,
        employees: document.getElementById('employees').value,
        whatsapp: document.getElementById('whatsapp').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value || 'Não informado',
        message: document.getElementById('message').value || 'Sem mensagem adicional'
    };
    
    console.log('Enviando dados para webhook:', formData);
    
    // Desabilitar botão de envio para evitar múltiplos cliques
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    
    try {
        // Enviar dados para o webhook do N8N
        const webhookURL = 'https://mediagrowth-n8n.63kuy3.easypanel.host/webhook/ce894299-75b9-46a9-bc90-8cc8565530ab';
        
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            console.log('Dados enviados com sucesso para o webhook!');
            
            // Salvar dados no localStorage para usar na página de obrigado (opcional)
            localStorage.setItem('leadData', JSON.stringify(formData));
            
            // Redirecionar para página de obrigado
            window.location.href = 'obrigado.html';
        } else {
            throw new Error('Erro ao enviar dados para o webhook');
        }
        
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        
        // Mesmo com erro no webhook, redirecionar para a página de obrigado
        // para não prejudicar a experiência do usuário
        alert('Seu formulário foi recebido! Entraremos em contato em breve.');
        localStorage.setItem('leadData', JSON.stringify(formData));
        window.location.href = 'obrigado.html';
    } finally {
        // Restaurar botão (caso não redirecione)
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
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

// Rastreamento de cliques em CTAs
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        console.log('CTA Clicked (Meta Ads):', buttonText);
    });
});
