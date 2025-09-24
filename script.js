// Enhanced interactivity for María's Quinceañera Invitation
document.addEventListener('DOMContentLoaded', function() {
    
    // Set background images from data-img attributes
    const setBackgroundImages = () => {
        const photoFrames = document.querySelectorAll('.photo-frame[data-img]');
        photoFrames.forEach(frame => {
            const imgPath = frame.getAttribute('data-img');
            if (imgPath) {
                const frameAfter = window.getComputedStyle(frame, '::after');
                frame.style.setProperty('--bg-image', `url('${imgPath}')`);
            }
        });
    };
    
    // Add smooth scrolling behavior
    const smoothScroll = () => {
        document.documentElement.style.scrollBehavior = 'smooth';
    };
    
    // Create additional floating elements dynamically
    const createFloatingElements = () => {
        const container = document.querySelector('.floating-decorations');
        
        // Add more fireflies
        for (let i = 5; i <= 8; i++) {
            const firefly = document.createElement('div');
            firefly.className = `firefly firefly-${i}`;
            firefly.style.top = Math.random() * 80 + '%';
            firefly.style.left = Math.random() * 80 + '%';
            firefly.style.animationDelay = Math.random() * 4 + 's';
            firefly.style.animationDuration = (Math.random() * 2 + 3) + 's';
            container.appendChild(firefly);
        }
        
        // Add golden sparkles
        for (let i = 1; i <= 6; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'golden-sparkle';
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.color = '#FFD700';
            sparkle.style.fontSize = '12px';
            sparkle.style.top = Math.random() * 90 + '%';
            sparkle.style.left = Math.random() * 90 + '%';
            sparkle.style.animation = `sparkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
            sparkle.style.animationDelay = Math.random() * 3 + 's';
            sparkle.style.opacity = '0.6';
            sparkle.style.pointerEvents = 'none';
            container.appendChild(sparkle);
        }
    };
    
    // Add parallax effect to photos
    const addParallaxEffect = () => {
        const photos = document.querySelectorAll('.quinceañera-photo');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.1;
            
            photos.forEach((photo, index) => {
                const yPos = rate * (index + 1);
                photo.style.transform = `translateY(${yPos}px)`;
            });
        });
    };
    
    // Add hover effects to sections
    const addHoverEffects = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            section.addEventListener('mouseenter', () => {
                section.style.transform = 'scale(1.01)';
                section.style.transition = 'transform 0.3s ease';
            });
            
            section.addEventListener('mouseleave', () => {
                section.style.transform = 'scale(1)';
            });
        });
    };
    
    // Add typing animation to main title
    const addTypingAnimation = () => {
        const title = document.querySelector('.main-title');
        if (title) {
            const text = title.textContent;
            title.textContent = '';
            title.style.borderRight = '2px solid #DAA520';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    title.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 150);
                } else {
                    setTimeout(() => {
                        title.style.borderRight = 'none';
                    }, 1000);
                }
            };
            
            // Start typing animation after a short delay
            setTimeout(typeWriter, 1000);
        }
    };
    
    // Add fade-in animation on scroll
    const addScrollAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                }
            });
        }, observerOptions);
        
        // Observe all sections except the header
        const sections = document.querySelectorAll('section:not(.header-section)');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            observer.observe(section);
        });
    };
    
    // Add golden particle effect on click
    const addClickEffects = () => {
        document.addEventListener('click', (e) => {
            createGoldenParticles(e.clientX, e.clientY);
        });
    };
    
    const createGoldenParticles = (x, y) => {
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.innerHTML = '✨';
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.color = '#FFD700';
            particle.style.fontSize = '16px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            
            const angle = (Math.PI * 2 * i) / 6;
            const velocity = 50;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            document.body.appendChild(particle);
            
            let opacity = 1;
            let currentX = x;
            let currentY = y;
            
            const animate = () => {
                currentX += vx * 0.02;
                currentY += vy * 0.02;
                opacity -= 0.02;
                
                particle.style.left = currentX + 'px';
                particle.style.top = currentY + 'px';
                particle.style.opacity = opacity;
                particle.style.transform = `scale(${opacity})`;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            requestAnimationFrame(animate);
        }
    };
    
    // Add music note floating effect
    const addMusicNotes = () => {
        const container = document.querySelector('.floating-decorations');
        const notes = ['♪', '♫', '♬', '♩'];
        
        setInterval(() => {
            const note = document.createElement('div');
            note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
            note.style.position = 'absolute';
            note.style.left = Math.random() * 100 + '%';
            note.style.top = '100%';
            note.style.color = '#DAA520';
            note.style.fontSize = '20px';
            note.style.opacity = '0.7';
            note.style.pointerEvents = 'none';
            note.style.animation = 'floatUp 8s linear';
            
            container.appendChild(note);
            
            setTimeout(() => {
                note.remove();
            }, 8000);
        }, 3000);
        
        // Add floatUp animation to CSS dynamically
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.7;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    };
    
    // Add golden frame animation to photos
    const addPhotoFrameAnimation = () => {
        const photoFrames = document.querySelectorAll('.photo-frame');
        
        photoFrames.forEach((frame, index) => {
            // Stagger the animation start
            frame.style.animationDelay = (index * 0.3) + 's';
            
            // Add enhanced hover effects
            frame.addEventListener('mouseenter', () => {
                frame.style.animationDuration = '1s';
                frame.style.transform = 'scale(1.08) rotate(1deg)';
            });
            
            frame.addEventListener('mouseleave', () => {
                frame.style.animationDuration = '4s';
                frame.style.transform = 'scale(1) rotate(0deg)';
            });
        });
        
        // Add enhanced pulse animation for frames
        const pulseStyle = document.createElement('style');
        pulseStyle.textContent = `
            @keyframes enhancedPulse {
                0%, 100% { 
                    transform: scale(1) rotate(0deg);
                    box-shadow: 0 20px 40px rgba(218, 165, 32, 0.3);
                }
                50% { 
                    transform: scale(1.02) rotate(0.5deg);
                    box-shadow: 0 25px 50px rgba(218, 165, 32, 0.4);
                }
            }
        `;
        document.head.appendChild(pulseStyle);
    };
    
    // Add crown rotation effect
    const addCrownAnimation = () => {
        const crown = document.querySelector('.crown-decoration svg');
        if (crown) {
            crown.addEventListener('mouseenter', () => {
                crown.style.animation = 'crownRotate 2s ease-in-out';
            });
        }
        
        const crownStyle = document.createElement('style');
        crownStyle.textContent = `
            @keyframes crownRotate {
                0% { transform: rotate(0deg) scale(1); }
                25% { transform: rotate(-5deg) scale(1.1); }
                50% { transform: rotate(5deg) scale(1.1); }
                75% { transform: rotate(-2deg) scale(1.05); }
                100% { transform: rotate(0deg) scale(1); }
            }
        `;
        document.head.appendChild(crownStyle);
    };
    
    // Initialize all effects
    setBackgroundImages();
    smoothScroll();
    createFloatingElements();
    addParallaxEffect();
    addHoverEffects();
    addTypingAnimation();
    addScrollAnimations();
    addClickEffects();
    addMusicNotes();
    addPhotoFrameAnimation();
    addCrownAnimation();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';
    
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
    
    // Add touch support for mobile devices
    if ('ontouchstart' in window) {
        document.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            createGoldenParticles(touch.clientX, touch.clientY);
        });
    }
    
    // Optimize for video recording
    const optimizeForVideo = () => {
        if (window.innerHeight > window.innerWidth * 1.5) {
            document.body.classList.add('video-mode');
            
            // Reduce animation intensity for better video recording
            const style = document.createElement('style');
            style.textContent = `
                .video-mode .floating-decorations {
                    opacity: 0.8;
                }
                .video-mode .firefly {
                    animation-duration: 6s;
                }
                .video-mode .butterfly {
                    animation-duration: 8s;
                }
            `;
            document.head.appendChild(style);
        }
    };
    
    optimizeForVideo();
    window.addEventListener('resize', optimizeForVideo);
});

// Add console message for developer
console.log('✨ Invitación de Quinceañera - María Irigoyen ✨');
console.log('🎭 Temática: La Princesa y el Sapo');
console.log('👑 Diseño elegante con detalles dorados');
console.log('📱 Optimizado para grabación de video 9:16');
