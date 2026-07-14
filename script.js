// ===== STORY SCRIPT =====
const storyScript = [
    // === SCENE 1 ===
    { type: 'pause', duration: 2000 },
    { type: 'line', text: 'Привет,' },
    { type: 'pause', duration: 1800 },
    { type: 'line', text: 'Альбина.' },
    { type: 'pause', duration: 2500 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 2 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Сегодня тебе' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: '35' },
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Красивый возраст.' },
    { type: 'pause', duration: 2500 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 3 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Возраст,' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'когда уже многое понимаешь.' },
    { type: 'pause', duration: 1800 },
    { type: 'line', text: 'И всё ещё столько всего впереди.' },
    { type: 'pause', duration: 3000 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 4 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Сегодня не будет' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'длинной открытки.' },
    { type: 'pause', duration: 2500 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 5 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Иногда одной песни достаточно...' },
    { type: 'pause', duration: 3000 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 6 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: '...чтобы сказать больше,' },
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'чем открыткой.' },
    { type: 'pause', duration: 3000 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 7 ===
    { type: 'pause', duration: 2000 },
    { type: 'line', text: 'Помнишь?' },
    { type: 'pause', duration: 2500 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 8 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Ты написала мне' },
    { type: 'pause', duration: 1500 },
    { type: 'line', text: '«Божечки!!!' },
    { type: 'pause', duration: 1000 },
    { type: 'line', text: 'Какая песня!!!»' },
    { type: 'pause', duration: 3000 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 9 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Наверное,' },
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'некоторые песни' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'становятся больше,' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'чем просто музыкой.' },
    { type: 'pause', duration: 3000 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 10 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Я продолжаю видеть' },
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'в ней нас.' },
    { type: 'pause', duration: 3000 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 11 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Спасибо.' },
    { type: 'pause', duration: 2500 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 12 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'За разговоры.' },
    { type: 'pause', duration: 2500 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 13 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'За смех.' },
    { type: 'pause', duration: 2500 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 14 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'За ту тишину,' },
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'в которой' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'становилось спокойно.' },
    { type: 'pause', duration: 3000 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 15 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'За ощущение,' },
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'что рядом' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'можно быть настоящим.' },
    { type: 'pause', duration: 4000 },
    { type: 'fadeOut', duration: 3000 },

    // === LONG PAUSE ===
    { type: 'pause', duration: 4000 },

    // === SCENE 16 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Знаешь...' },
    { type: 'pause', duration: 2500 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 17 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Если бы' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'у меня была' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'такая кнопка...' },
    { type: 'pause', duration: 2500 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 18 ===
    { type: 'pause', duration: 2000 },
    { type: 'line', text: '«Прожить снова»' },
    { type: 'pause', duration: 3000 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 19 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Я бы нажимал её' },
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'снова' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'и снова.' },
    { type: 'pause', duration: 3000 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 20 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'Не потому,' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'что хочется' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'вернуть время.' },
    { type: 'pause', duration: 2500 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 21 ===
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'А потому,' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'что некоторые моменты' },
    { type: 'pause', duration: 1500 },
    { type: 'line', text: 'хочется' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'почувствовать' },
    { type: 'pause', duration: 1200 },
    { type: 'line', text: 'ещё раз.' },
    { type: 'pause', duration: 3000 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 22 ===
    { type: 'pause', duration: 2500 },
    { type: 'fadeOut', duration: 2000 },

    // === SCENE 23 ===
    { type: 'pause', duration: 2000 },
    { type: 'line', text: 'Ты прекрасна.' },
    { type: 'pause', duration: 3000 },
    // After this: 3 seconds of silence, then replay button
];

// ===== STATE =====
let currentStep = 0;
let isPlaying = false;
let activeLines = [];
const music = document.getElementById('music');
const textContainer = document.getElementById('text-container');
const startOverlay = document.getElementById('start-overlay');
const startBtn = document.getElementById('start-btn');
const replayOverlay = document.getElementById('replay-overlay');
const replayBtn = document.getElementById('replay-btn');
const story = document.getElementById('story');

// ===== HELPERS =====
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createLine(text) {
    const line = document.createElement('div');
    line.className = 'story-line';
    line.textContent = text;
    textContainer.appendChild(line);

    // Force reflow
    line.offsetHeight;

    return line;
}

function showLine(line) {
    return new Promise(resolve => {
        const onTransitionEnd = (e) => {
            if (e.propertyName === 'opacity') {
                line.removeEventListener('transitionend', onTransitionEnd);
                resolve();
            }
        };
        line.addEventListener('transitionend', onTransitionEnd);

        // Fallback
        setTimeout(resolve, 2600);

        requestAnimationFrame(() => {
            line.classList.add('visible');
        });
    });
}

function fadeOutAll() {
    return new Promise(resolve => {
        const lines = textContainer.querySelectorAll('.story-line');
        if (lines.length === 0) {
            resolve();
            return;
        }

        let completed = 0;
        const total = lines.length;

        const checkComplete = () => {
            completed++;
            if (completed >= total) {
                textContainer.innerHTML = '';
                resolve();
            }
        };

        lines.forEach(line => {
            const onTransitionEnd = (e) => {
                if (e.propertyName === 'opacity') {
                    line.removeEventListener('transitionend', onTransitionEnd);
                    checkComplete();
                }
            };
            line.addEventListener('transitionend', onTransitionEnd);
            line.classList.add('fade-out');
        });

        // Fallback
        setTimeout(() => {
            textContainer.innerHTML = '';
            resolve();
        }, 2500);
    });
}

// ===== STORY ENGINE =====
async function playStory() {
    currentStep = 0;
    isPlaying = true;

    while (currentStep < storyScript.length && isPlaying) {
        const step = storyScript[currentStep];

        switch (step.type) {
            case 'pause':
                await wait(step.duration);
                break;

            case 'line':
                const line = createLine(step.text);
                await showLine(line);
                break;

            case 'fadeOut':
                await fadeOutAll();
                break;
        }

        currentStep++;
    }

    // Story ended — 3 seconds of silence
    await wait(3000);

    // Show replay button
    replayOverlay.classList.add('visible');
}

// ===== START =====
startBtn.addEventListener('click', async () => {
    startOverlay.classList.add('hidden');

    // Try to play music
    try {
        music.volume = 0.7;
        await music.play();
    } catch (e) {
        console.log('Autoplay blocked, waiting for interaction');
    }

    await wait(1000);
    playStory();
});

// ===== REPLAY =====
replayBtn.addEventListener('click', async () => {
    replayOverlay.classList.remove('visible');

    // Fade to black
    story.classList.add('fade-to-black');

    await wait(3000);

    // Reset
    textContainer.innerHTML = '';
    story.classList.remove('fade-to-black');
    currentStep = 0;

    // Restart music
    music.currentTime = 0;
    try {
        await music.play();
    } catch (e) {
        console.log('Music replay failed');
    }

    await wait(500);
    playStory();
});

// ===== SAFARI AUDIO UNLOCK =====
document.addEventListener('touchstart', function unlockAudio() {
    if (music.paused) {
        music.play().then(() => {
            music.pause();
            music.currentTime = 0;
        }).catch(() => {});
    }
    document.removeEventListener('touchstart', unlockAudio);
}, { once: true });

// ===== VISIBILITY API =====
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        music.pause();
    } else if (isPlaying && !startOverlay.classList.contains('hidden')) {
        // Don't auto-resume if we're in the middle
    }
});
