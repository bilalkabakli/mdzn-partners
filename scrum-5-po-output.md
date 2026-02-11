# SCRUM-5: User Login Feature - PO Analysis

## Issue Ozeti
| Alan | Deger |
|------|-------|
| **Issue Key** | SCRUM-5 |
| **Summary** | User Login Feature |
| **Type** | Story |
| **Priority** | High |
| **Labels** | fullstack |
| **Description** | Kullanicilarin email ve sifre ile giris yapabilmesi icin bir login ozelligi eklenmeli |

---

## Acceptance Criteria

### AC-1: Basarili Giris
```gherkin
Given kullanici login sayfasindayken
And gecerli bir email adresi girmisken
And dogru sifreyi girmisken
When "Giris Yap" butonuna tikladiginda
Then kullanici basariyla authenticate edilmeli
And kullanici ana sayfaya yonlendirilmeli
And bir JWT token olusturulup guvenli sekilde saklanmali
```

### AC-2: Gecersiz Email Formati
```gherkin
Given kullanici login sayfasindayken
When gecersiz formatta bir email adresi girdiginde (ornegin: "test", "test@", "@test.com")
Then email alani altinda "Gecerli bir email adresi giriniz" hata mesaji gosterilmeli
And form submit edilememeli
```

### AC-3: Yanlis Kimlik Bilgileri
```gherkin
Given kullanici login sayfasindayken
And gecerli formatta bir email adresi girmisken
And yanlis sifre girmisken
When "Giris Yap" butonuna tikladiginda
Then "Email veya sifre hatali" hata mesaji gosterilmeli
And kullanici login sayfasinda kalmali
And sifre alani temizlenmeli
```

### AC-4: Kayitli Olmayan Email
```gherkin
Given kullanici login sayfasindayken
And sistemde kayitli olmayan bir email adresi girmisken
And herhangi bir sifre girmisken
When "Giris Yap" butonuna tikladiginda
Then "Email veya sifre hatali" hata mesaji gosterilmeli
And guvenlik icin ayni hata mesaji kullanilmali (email var/yok bilgisi verilmemeli)
```

### AC-5: Bos Alan Validasyonu
```gherkin
Given kullanici login sayfasindayken
When email ve/veya sifre alani bos birakildiginda
And "Giris Yap" butonuna tikladiginda
Then bos alanlar icin "Bu alan zorunludur" hata mesaji gosterilmeli
And form submit edilememeli
```

### AC-6: Sifre Gizleme/Gosterme
```gherkin
Given kullanici login sayfasindayken
And sifre alanina bir deger girmisken
When sifre alanindaki "goz" ikonuna tikladiginda
Then sifre duzenlenmis metin olarak gosterilmeli
When tekrar "goz" ikonuna tikladiginda
Then sifre tekrar maskelenmeli (****)
```

### AC-7: Loading State
```gherkin
Given kullanici login formunu doldurmusken
When "Giris Yap" butonuna tikladiginda
Then buton disabled olmali
And butonda loading spinner gosterilmeli
And islem tamamlanana kadar form tekrar submit edilememeli
```

### AC-8: Rate Limiting
```gherkin
Given bir IP adresinden 5 basarisiz giris denemesi yapilmisken
When 6. giris denemesi yapildiginda
Then "Cok fazla basarisiz deneme. 15 dakika sonra tekrar deneyin" mesaji gosterilmeli
And giris islemi 15 dakika boyunca engellenmeli
```

### AC-9: "Beni Hatirla" Ozelligi
```gherkin
Given kullanici login sayfasindayken
And "Beni Hatirla" checkbox'i isaretliyken
When basarili bir sekilde giris yaptiginda
Then oturum 30 gun boyunca gecerli olmali
And tarayici kapatilip acilsa bile kullanici girisli kalmali

Given kullanici login sayfasindayken
And "Beni Hatirla" checkbox'i isaretli degilken
When basarili bir sekilde giris yaptiginda
Then oturum sadece tarayici oturumu boyunca gecerli olmali
```

### AC-10: Responsive Tasarim
```gherkin
Given kullanici mobil cihazdan (320px - 768px) login sayfasina eristiginde
Then login formu ekrana sigmali
And tum elemanlar tiklabilir ve okunabilir olmali
And input alanlari mobil klavye ile uyumlu calismal
```

---

## Subtask Listesi

### [FE] Frontend Subtask'lari

#### [FE] SCRUM-5-1: Login Sayfasi UI Komponenti
**Aciklama:** Login sayfasi icin React komponenti olusturulmali
- Login form komponenti (email input, password input, submit button)
- "Beni Hatirla" checkbox komponenti
- Password visibility toggle ozelligi
- Responsive tasarim (mobile-first)
- Loading state UI
- Form layout ve styling

**Teknik Detaylar:**
- React functional component
- CSS modules veya styled-components
- Mobile-first responsive design

---

#### [FE] SCRUM-5-2: Form Validasyonu (Client-Side)
**Aciklama:** Client-side form validasyonu implement edilmeli
- Email format validasyonu (regex)
- Bos alan kontrolu
- Real-time validation feedback
- Error message gosterimi

**Teknik Detaylar:**
- React Hook Form veya Formik kullanimi
- Yup veya Zod ile schema validasyonu
- Inline error messaging

---

#### [FE] SCRUM-5-3: Authentication Service Entegrasyonu
**Aciklama:** Backend API ile iletisim katmani olusturulmali
- Login API call (POST /api/auth/login)
- JWT token yonetimi (storage/retrieval)
- Auth context/state management
- Axios interceptor setup
- Error handling

**Teknik Detaylar:**
- Axios veya Fetch API
- Context API veya Redux icin auth state
- Secure token storage (httpOnly cookie veya memory)

---

#### [FE] SCRUM-5-4: Hata Mesajlari ve Feedback UI
**Aciklama:** Kullanici geri bildirimi icin UI komponentleri
- Error toast/alert komponenti
- Rate limit warning UI
- Success notification
- Form error states styling

---

#### [FE] SCRUM-5-5: Unit ve Integration Testleri (FE)
**Aciklama:** Frontend icin test coverage
- Login komponenti unit testleri
- Form validasyonu testleri
- API mock ile integration testleri
- Error handling testleri

**Teknik Detaylar:**
- Jest + React Testing Library
- MSW (Mock Service Worker) ile API mocking

---

### [BE] Backend Subtask'lari

#### [BE] SCRUM-5-6: Login API Endpoint
**Aciklama:** POST /api/auth/login endpoint'i olusturulmali
- Request body validasyonu (email, password)
- User lookup by email
- Password hash karsilastirmasi
- JWT token generation
- Response formatting

**API Contract:**
```
POST /api/auth/login
Request Body:
{
  "email": "string (required, valid email format)",
  "password": "string (required, min 8 chars)",
  "rememberMe": "boolean (optional, default: false)"
}

Success Response (200):
{
  "success": true,
  "data": {
    "user": {
      "id": "string",
      "email": "string",
      "name": "string"
    },
    "token": "string (JWT)",
    "expiresIn": "number (seconds)"
  }
}

Error Response (401):
{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Email veya sifre hatali"
  }
}
```

---

#### [BE] SCRUM-5-7: Password Hashing ve Dogrulama
**Aciklama:** Guvenli sifre yonetimi
- Bcrypt ile password hashing
- Salt generation
- Password comparison utility
- Hash cost factor konfigurasyonu

**Teknik Detaylar:**
- bcrypt veya argon2 kutuphanesi
- Cost factor: minimum 10 rounds

---

#### [BE] SCRUM-5-8: JWT Token Yonetimi
**Aciklama:** JWT token islemleri
- Token generation (access token)
- Token expiration yonetimi (remember me: 30 gun, normal: 24 saat)
- Token payload yapisi (userId, email, iat, exp)
- Secret key yonetimi (environment variable)

**Teknik Detaylar:**
- jsonwebtoken kutuphanesi
- RS256 veya HS256 algoritma
- Refresh token mekanizmasi (opsiyonel, v2 icin)

---

#### [BE] SCRUM-5-9: Rate Limiting Middleware
**Aciklama:** Brute-force korumasi icin rate limiting
- IP bazli istek limitleme
- 5 basarisiz deneme / 15 dakika
- Redis ile rate limit state yonetimi
- Whitelist/blacklist desteigi

**Teknik Detaylar:**
- express-rate-limit veya custom middleware
- Redis adapter
- Sliding window algoritma

---

#### [BE] SCRUM-5-10: Input Validasyonu ve Sanitizasyon
**Aciklama:** Guvenli input isleme
- Email format validasyonu
- SQL injection korunmasi
- XSS korunmasi
- Request body size limit

**Teknik Detaylar:**
- Joi veya express-validator
- Helmet middleware
- Parameterized queries

---

#### [BE] SCRUM-5-11: Error Handling ve Logging
**Aciklama:** Merkezi hata yonetimi
- Custom error classes
- Error response formatting
- Login attempt logging (basarili/basarisiz)
- Sensitive data maskeleme (sifre loglama)

**Teknik Detaylar:**
- Winston veya Pino logger
- Structured logging format
- Log levels (info, warn, error)

---

#### [BE] SCRUM-5-12: Unit ve Integration Testleri (BE)
**Aciklama:** Backend icin test coverage
- Login endpoint unit testleri
- Password hashing testleri
- JWT generation/validation testleri
- Rate limiting testleri
- Integration testleri (database ile)

**Teknik Detaylar:**
- Jest veya Mocha
- Supertest icin API testing
- Test database veya mocking

---

## Subtask Ozet Tablosu

| Subtask ID | Prefix | Baslik | Dependency |
|------------|--------|--------|------------|
| SCRUM-5-1 | [FE] | Login Sayfasi UI Komponenti | - |
| SCRUM-5-2 | [FE] | Form Validasyonu (Client-Side) | SCRUM-5-1 |
| SCRUM-5-3 | [FE] | Authentication Service Entegrasyonu | SCRUM-5-6 |
| SCRUM-5-4 | [FE] | Hata Mesajlari ve Feedback UI | SCRUM-5-1 |
| SCRUM-5-5 | [FE] | Unit ve Integration Testleri (FE) | SCRUM-5-1, SCRUM-5-2, SCRUM-5-3 |
| SCRUM-5-6 | [BE] | Login API Endpoint | - |
| SCRUM-5-7 | [BE] | Password Hashing ve Dogrulama | - |
| SCRUM-5-8 | [BE] | JWT Token Yonetimi | - |
| SCRUM-5-9 | [BE] | Rate Limiting Middleware | - |
| SCRUM-5-10 | [BE] | Input Validasyonu ve Sanitizasyon | - |
| SCRUM-5-11 | [BE] | Error Handling ve Logging | - |
| SCRUM-5-12 | [BE] | Unit ve Integration Testleri (BE) | SCRUM-5-6 - SCRUM-5-11 |

---

## Notlar
- FE ve BE ekipleri paralel calisabilir
- SCRUM-5-3 (FE Auth Service) icin SCRUM-5-6 (BE Login API) tamamlanmis olmali
- Guvenlik gereksinimleri (rate limiting, password hashing) MVP icin zorunludur
- Refresh token mekanizmasi v2 icin planlanabilir

---

*PO Analizi Tarihi: 2026-02-11*
*Hazirlayan: PO Teammate*
