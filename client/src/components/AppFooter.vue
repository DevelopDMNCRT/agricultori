<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="app-footer">
    <!-- Top Footer Glow Blobs -->
    <div class="footer-blob-1"></div>
    <div class="footer-blob-2"></div>
    
    <div class="container footer-container">
      <div class="footer-grid">
        <!-- Brand Info Column -->
        <div class="footer-col brand-col">
          <router-link to="/productos" class="footer-logo-link">
            <div class="logo-wrapper">
              <img src="/logo.png" alt="Agricultori Logo" class="footer-logo" />
            </div>
          </router-link>
          <p class="brand-desc">
            El apoyo tecnológico obligado para los agricultores y exportadores en México y Estados Unidos. Facilitamos el comercio agrícola con transparencia, inmediatez y seguridad.
          </p>
          <div class="social-links">
            <a href="#" class="social-btn" aria-label="Facebook">
              <Icon icon="ri:facebook-fill" width="18" height="18" />
            </a>
            <a href="#" class="social-btn" aria-label="Instagram">
              <Icon icon="ri:instagram-line" width="18" height="18" />
            </a>
            <a href="#" class="social-btn" aria-label="TikTok">
              <Icon icon="ri:tiktok-fill" width="18" height="18" />
            </a>
          </div>
        </div>

        <!-- Navigation Links Column -->
        <div class="footer-col links-col">
          <h4 class="col-title">Navegación</h4>
          <ul class="footer-links-list">
            <li>
              <router-link to="/" class="footer-nav-link">
                <Icon icon="lucide:chevron-right" width="14" height="14" class="bullet-icon" />
                Inicio
              </router-link>
            </li>
            <li>
              <router-link to="/productos" class="footer-nav-link">
                <Icon icon="lucide:chevron-right" width="14" height="14" class="bullet-icon" />
                Productos
              </router-link>
            </li>
            <li>
              <router-link to="/distribuidores" class="footer-nav-link">
                <Icon icon="lucide:chevron-right" width="14" height="14" class="bullet-icon" />
                Distribuidores
              </router-link>
            </li>
            <li>
              <router-link to="/nuestra-app" class="footer-nav-link">
                <Icon icon="lucide:chevron-right" width="14" height="14" class="bullet-icon" />
                Nuestra App
              </router-link>
            </li>
            <li>
              <router-link to="/herramientas" class="footer-nav-link">
                <Icon icon="lucide:chevron-right" width="14" height="14" class="bullet-icon" />
                Herramientas
              </router-link>
            </li>
            <li>
              <router-link to="/quienes-somos" class="footer-nav-link">
                <Icon icon="lucide:chevron-right" width="14" height="14" class="bullet-icon" />
                Quiénes Somos
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact & Support Column -->
        <div class="footer-col contact-col">
          <h4 class="col-title">Contacto y Soporte</h4>
          <ul class="footer-contact-list">
            <li class="contact-info-item">
              <div class="contact-icon-box">
                <Icon icon="lucide:mail" width="16" height="16" />
              </div>
              <a href="mailto:hola@agricultori.mx" class="contact-link">hola@agricultori.mx</a>
            </li>
            <li class="contact-info-item">
              <div class="contact-icon-box">
                <Icon icon="lucide:phone" width="16" height="16" />
              </div>
              <a href="tel:3330070631" class="contact-link">33 3007 0631</a>
            </li>
            <li class="contact-info-item">
              <div class="contact-icon-box">
                <Icon icon="lucide:map-pin" width="16" height="16" />
              </div>
              <span class="contact-text">México</span>
            </li>
          </ul>
          <router-link to="/contacto" class="contact-cta-btn">
            Escríbenos ahora
            <Icon icon="lucide:arrow-right" width="16" height="16" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Bottom copyright centered as requested -->
    <div class="footer-bottom">
      <div class="container bottom-container">
        <p class="copyright-text">Agricultori. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--color-primary-dark);
  background: linear-gradient(180deg, #002b1c 0%, #00170f 100%);
  border-top: 1px solid rgba(251, 134, 3, 0.15);
  padding: 6rem 0 0;
  position: relative;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.8);
  font-family: var(--font-body);
}

/* Subtle decorative glow blobs */
.footer-blob-1, .footer-blob-2 {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.08;
  pointer-events: none;
}

.footer-blob-1 {
  top: -20%;
  left: 5%;
  width: 300px;
  height: 300px;
  background-color: var(--color-accent);
}

.footer-blob-2 {
  bottom: 10%;
  right: 5%;
  width: 250px;
  height: 250px;
  background-color: var(--color-primary-light);
}

.footer-container {
  position: relative;
  z-index: 2;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr;
  gap: 5rem;
  padding-bottom: 5rem;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Brand logo styling with light background wrapper to guarantee contrast */
.logo-wrapper {
  background: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: var(--transition-smooth);
}

.logo-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(251, 134, 3, 0.2);
}

.footer-logo-link {
  display: inline-block;
  width: fit-content;
}

.footer-logo {
  height: 38px;
  width: auto;
  object-fit: contain;
}

.brand-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  max-width: 380px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  transition: var(--transition-bounce);
  text-decoration: none;
}

.social-btn:hover {
  transform: translateY(-4px) scale(1.05);
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(251, 134, 3, 0.3);
}

/* Navigation list styling */
.col-title {
  font-family: var(--font-title);
  font-size: 1.2rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 0.75rem;
}

.col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 35px;
  height: 2px;
  background-color: var(--color-accent);
  border-radius: 2px;
}

.footer-links-list, .footer-contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
}

.footer-nav-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  transition: var(--transition-smooth);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-nav-link .bullet-icon {
  opacity: 0;
  transform: translateX(-5px);
  transition: var(--transition-smooth);
  color: var(--color-accent);
}

.footer-nav-link:hover {
  color: var(--color-accent);
  padding-left: 6px;
}

.footer-nav-link:hover .bullet-icon {
  opacity: 1;
  transform: translateX(0);
}

/* Contact information styling */
.contact-info-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
}

.contact-icon-box {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  flex-shrink: 0;
}

.contact-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: var(--transition-smooth);
}

.contact-link:hover {
  color: var(--color-accent);
}

.contact-text {
  color: rgba(255, 255, 255, 0.7);
}

.contact-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(251, 134, 3, 0.1);
  border: 1px solid rgba(251, 134, 3, 0.2);
  color: var(--color-accent);
  padding: 0.6rem 1.25rem;
  border-radius: var(--border-radius-sm);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.85rem;
  width: fit-content;
  text-decoration: none;
  transition: var(--transition-smooth);
  margin-top: 0.5rem;
}

.contact-cta-btn:hover {
  background: var(--color-accent);
  color: #ffffff;
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

/* Footer Bottom centered as requested */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2rem 0;
  background-color: rgba(0, 0, 0, 0.15);
}

.bottom-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.copyright-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  text-align: center;
  margin: 0;
}

/* Responsive Queries */
@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  
  .brand-col {
    grid-column: span 2;
    align-items: center;
    text-align: center;
  }
  
  .brand-desc {
    max-width: 500px;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
  
  .brand-col {
    grid-column: span 1;
  }
  
  .footer-col {
    align-items: center;
    text-align: center;
  }
  
  .col-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .contact-info-item {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
