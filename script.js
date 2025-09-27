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
    
    // Ensure background image stays visible
    const ensureBackgroundImage = () => {
        // Preload the background image
        const bgImage = new Image();
        bgImage.src = 'assets/fondo.jpeg';
        
        // Set background on body as backup
        document.body.style.backgroundImage = `url('assets/fondo.jpeg')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundRepeat = 'no-repeat';
        
        // Set background on html as backup
        document.documentElement.style.backgroundImage = `url('assets/fondo.jpeg')`;
        document.documentElement.style.backgroundSize = 'cover';
        document.documentElement.style.backgroundPosition = 'center';
        document.documentElement.style.backgroundAttachment = 'fixed';
        document.documentElement.style.backgroundRepeat = 'no-repeat';
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
    ensureBackgroundImage();
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
    
    // Verificar periódicamente que la imagen de fondo se mantenga visible
    setInterval(() => {
        ensureBackgroundImage();
    }, 2000);
    
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
    
    // Initialize audio player
    initializeAudioPlayer();
});

// Audio Player Functionality
function initializeAudioPlayer() {
    const audio = document.getElementById('backgroundMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const restartBtn = document.getElementById('restartBtn');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const muteIcon = muteBtn.querySelector('.mute-icon');
    
    // Load user preferences from localStorage
    let isPlaying = localStorage.getItem('audioPlaying') !== 'false'; // Default to true
    let isMuted = localStorage.getItem('audioMuted') === 'true'; // Default to false
    let isDragging = false;
    
    // Format time helper function
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Update progress bar
    function updateProgress() {
        if (audio.duration && !isDragging) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = `${progress}%`;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    }
    
    // Update total time when metadata is loaded
    function updateTotalTime() {
        if (audio.duration) {
            totalTimeEl.textContent = formatTime(audio.duration);
        }
    }
    
    // Play/Pause functionality
    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
            playIcon.textContent = '▶️';
            isPlaying = false;
            // Save preference
            localStorage.setItem('audioPlaying', 'false');
        } else {
            audio.play().catch(e => {
                console.log('Audio play failed:', e);
                // Show user-friendly message
                showAudioMessage('Haz clic en el botón de play para reproducir la música');
            });
            playIcon.textContent = '⏸️';
            isPlaying = true;
            // Save preference
            localStorage.setItem('audioPlaying', 'true');
        }
    }
    
    // Mute/Unmute functionality
    function toggleMute() {
        if (isMuted) {
            audio.muted = false;
            muteIcon.textContent = '🔊';
            isMuted = false;
            // Save preference
            localStorage.setItem('audioMuted', 'false');
        } else {
            audio.muted = true;
            muteIcon.textContent = '🔇';
            isMuted = true;
            // Save preference
            localStorage.setItem('audioMuted', 'true');
        }
    }
    
    // Restart functionality
    function restartAudio() {
        audio.currentTime = 0;
        if (isPlaying) {
            audio.play();
        }
    }
    
    // Handle progress bar click
    function handleProgressClick(e) {
        if (audio.duration) {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const clickTime = (clickX / width) * audio.duration;
            audio.currentTime = clickTime;
        }
    }
    
    // Handle progress bar drag
    function handleProgressDrag(e) {
        if (audio.duration) {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const clickTime = (clickX / width) * audio.duration;
            audio.currentTime = clickTime;
        }
    }
    
    // Show audio message helper
    function showAudioMessage(message) {
        // Create temporary message element
        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(218, 165, 32, 0.95);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-family: 'Playfair Display', serif;
            font-size: 1rem;
            z-index: 1000;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            animation: fadeInOut 3s ease-in-out;
        `;
        
        // Add fade animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(messageEl);
        
        setTimeout(() => {
            messageEl.remove();
            style.remove();
        }, 3000);
    }
    
    // Event listeners
    playPauseBtn.addEventListener('click', togglePlayPause);
    muteBtn.addEventListener('click', toggleMute);
    restartBtn.addEventListener('click', restartAudio);
    
    // Progress bar interactions
    progressBar.addEventListener('click', handleProgressClick);
    
    // Mouse drag on progress bar
    progressBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        handleProgressDrag(e);
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            handleProgressDrag(e);
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // Touch support for mobile
    progressBar.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        const rect = progressBar.getBoundingClientRect();
        const clickX = touch.clientX - rect.left;
        const width = rect.width;
        const clickTime = (clickX / width) * audio.duration;
        if (audio.duration) {
            audio.currentTime = clickTime;
        }
    });
    
    document.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    // Audio event listeners
    audio.addEventListener('loadedmetadata', updateTotalTime);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => {
        // Audio will loop automatically due to the loop attribute
        playIcon.textContent = '▶️';
        isPlaying = false;
    });
    
    audio.addEventListener('play', () => {
        playIcon.textContent = '⏸️';
        isPlaying = true;
    });
    
    audio.addEventListener('pause', () => {
        playIcon.textContent = '▶️';
        isPlaying = false;
    });
    
    // Initialize player state based on saved preferences
    function initializePlayerState() {
        // Set initial mute state
        audio.muted = isMuted;
        muteIcon.textContent = isMuted ? '🔇' : '🔊';
        
        // Set initial play state
        if (isPlaying) {
            playIcon.textContent = '⏸️';
            // Try to auto-play, but don't show error if it fails
            audio.play().catch(() => {
                // Auto-play was blocked, this is normal
                console.log('Auto-play blocked by browser (normal behavior)');
                // Update UI to show paused state
                playIcon.textContent = '▶️';
                isPlaying = false;
                localStorage.setItem('audioPlaying', 'false');
            });
        } else {
            playIcon.textContent = '▶️';
        }
    }
    
    // Auto-play attempt when audio is ready
    audio.addEventListener('canplaythrough', initializePlayerState);
    
    // Handle audio loading errors
    audio.addEventListener('error', (e) => {
        console.error('Audio loading error:', e);
        showAudioMessage('Error al cargar la música. Verifica que el archivo existe.');
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Only handle if audio player is visible
        const audioSection = document.querySelector('.audio-player-section');
        const rect = audioSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            switch(e.code) {
                case 'Space':
                    e.preventDefault();
                    togglePlayPause();
                    break;
                case 'KeyM':
                    e.preventDefault();
                    toggleMute();
                    break;
                case 'KeyR':
                    e.preventDefault();
                    restartAudio();
                    break;
            }
        }
    });
    
    // Add visual feedback for interactions
    const controlBtns = document.querySelectorAll('.control-btn');
    controlBtns.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('mouseup', () => {
            btn.style.transform = '';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
    
    // Additional auto-play attempt after page load
    window.addEventListener('load', () => {
        // Small delay to ensure everything is loaded
        setTimeout(() => {
            if (isPlaying && audio.paused) {
                audio.play().catch(() => {
                    console.log('Auto-play blocked after page load (normal behavior)');
                });
            }
        }, 1000);
    });
    
    // Try auto-play on user interaction (required by some browsers)
    const tryAutoPlay = () => {
        if (isPlaying && audio.paused) {
            audio.play().then(() => {
                console.log('Audio started playing after user interaction');
            }).catch(() => {
                console.log('Auto-play still blocked');
            });
        }
    };
    
    // Add click listener to document for auto-play
    document.addEventListener('click', tryAutoPlay, { once: true });
    document.addEventListener('touchstart', tryAutoPlay, { once: true });
}

// Add console message for developer
console.log('✨ Invitación de Quinceañera - María Irigoyen ✨');
console.log('🎭 Temática: La Princesa y el Sapo');
console.log('👑 Diseño elegante con detalles dorados');
console.log('📱 Optimizado para grabación de video 9:16');
console.log('🎵 Reproductor de audio integrado');
