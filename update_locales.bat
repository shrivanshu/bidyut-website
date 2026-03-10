@echo off
echo Updating locale files with missing translations...

REM Update Bengali (bn.ts)
powershell -Command "(Get-Content 'frontend\src\locales\bn.ts') -replace '  meetOurTeam: ''আমাদের অসাধারণ দলের সাথে দেখা করুন'',', '  meetOurTeam: ''আমাদের অসাধারণ দলের সাথে দেখা করুন'',$([Environment]::NewLine)  contactUs: ''আমাদের সাথে যোগাযোগ করুন'',$([Environment]::NewLine)  contactPageSubtitle: ''আসুন একসাথে আপনার উদ্ভাবনের যাত্রাকে শক্তি দিই। ধারণা থেকে উদ্ভাবন পর্যন্ত — বিদ্যুৎ এটি সম্ভব করে তোলে।'',' | Set-Content 'frontend\src\locales\bn.ts'"

REM Update Japanese (ja.ts)
powershell -Command "(Get-Content 'frontend\src\locales\ja.ts') -replace '  meetOurTeam: ''私たちの素晴らしいチームに会う'',', '  meetOurTeam: ''私たちの素晴らしいチームに会う'',$([Environment]::NewLine)  contactUs: ''お問い合わせ'',$([Environment]::NewLine)  contactPageSubtitle: ''一緒にあなたのイノベーションの旅を力づけましょう。アイデアからイノベーションまで — Bidyutがそれを実現します。'',' | Set-Content 'frontend\src\locales\ja.ts'"

REM Update Kannada (kn.ts)
powershell -Command "(Get-Content 'frontend\src\locales\kn.ts') -replace '  meetOurTeam: ''ನಮ್ಮ ಅದ್ಭುತ ತಂಡವನ್ನು ಭೇಟಿ ಮಾಡಿ'',', '  meetOurTeam: ''ನಮ್ಮ ಅದ್ಭುತ ತಂಡವನ್ನು ಭೇಟಿ ಮಾಡಿ'',$([Environment]::NewLine)  contactUs: ''ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'',$([Environment]::NewLine)  contactPageSubtitle: ''ನಿಮ್ಮ ನಾವೀನ್ಯತೆಯ ಪ್ರಯಾಣಕ್ಕೆ ಒಟ್ಟಿಗೆ ಶಕ್ತಿ ನೀಡೋಣ। ಕಲ್ಪನೆಯಿಂದ ನಾವೀನ್ಯತೆಯವರೆಗೆ — ಬಿದ್ಯುತ್ ಅದನ್ನು ಸಾಧ್ಯವಾಗಿಸುತ್ತದೆ।'',' | Set-Content 'frontend\src\locales\kn.ts'"

REM Update Russian (ru.ts)
powershell -Command "(Get-Content 'frontend\src\locales\ru.ts') -replace '  meetOurTeam: ''Познакомьтесь с нашей удивительной командой'',', '  meetOurTeam: ''Познакомьтесь с нашей удивительной командой'',$([Environment]::NewLine)  contactUs: ''Свяжитесь с нами'',$([Environment]::NewLine)  contactPageSubtitle: ''Давайте вместе придадим силу вашему инновационному путешествию. От идеи к инновации — Bidyut делает это возможным.'',' | Set-Content 'frontend\src\locales\ru.ts'"

REM Update Tamil (ta.ts)
powershell -Command "(Get-Content 'frontend\src\locales\ta.ts') -replace '  meetOurTeam: ''எங்கள் அற்புதமான குழுவை சந்திக்கவும்'',', '  meetOurTeam: ''எங்கள் அற்புதமான குழுவை சந்திக்கவும்'',$([Environment]::NewLine)  contactUs: ''எங்களை தொடர்பு கொள்ளுங்கள்'',$([Environment]::NewLine)  contactPageSubtitle: ''உங்கள் புதுமை பயணத்திற்கு ஒன்றாக சக்தி அளிப்போம். யோசனையிலிருந்து புதுமை வரை — பித்யுத் அதை சாத்தியமாக்குகிறது।'',' | Set-Content 'frontend\src\locales\ta.ts'"

REM Update Telugu (te.ts)
powershell -Command "(Get-Content 'frontend\src\locales\te.ts') -replace '  meetOurTeam: ''మా అద్భుతమైన బృందాన్ని కలవండి'',', '  meetOurTeam: ''మా అద్భుతమైన బృందాన్ని కలవండి'',$([Environment]::NewLine)  contactUs: ''మాతో సంప్రదించండి'',$([Environment]::NewLine)  contactPageSubtitle: ''మీ ఆవిష్కరణ ప్రయాణానికి కలిసి శక్తి ఇద్దాం. ఆలోచన నుండి ఆవిష్కరణ వరకు — బిద్యుత్ దానిని సాధ్యం చేస్తుంది।'',' | Set-Content 'frontend\src\locales\te.ts'"

REM Update Chinese (zh.ts)
powershell -Command "(Get-Content 'frontend\src\locales\zh.ts') -replace '  meetOurTeam: ''认识我们出色的团队'',', '  meetOurTeam: ''认识我们出色的团队'',$([Environment]::NewLine)  contactUs: ''联系我们'',$([Environment]::NewLine)  contactPageSubtitle: ''让我们一起为您的创新之旅注入动力。从想法到创新——Bidyut让这一切成为可能。'',' | Set-Content 'frontend\src\locales\zh.ts'"

echo All locale files updated successfully!
pause