<script src="/js/login.js"></script>
<div id="modalConn" class="modal">
  <div class="modal-content">
    <span class="closeConn close">&times;</span>
    <form id="connectionForm">
        <input name="IdConnexion" type="text" placeholder="Identifiant" required />
        <input type="password" name="mdp" placeholder="Mot de passe" required />
        <div id="connMessage"></div>
        <input id="connectSubmit" type="button" value="Connexion" />
    </form>
  </div>
</div>
<div id="modalInsc" class="modal">
  <div class="modal-content">
    <span class="closeInsc close">&times;</span>
    <form id="registerForm">
        <input type="text" name="IdConnexion" placeholder="Identifiant" required />
        <input type="text" name="nomEntreprise" placeholder="Nom de l'entreprise" required />
        <label for="Type">Type d'utilisateur</label>
        <select name="Type"></select>
        <input type="text" name="adresse" placeholder="Adresse" />
        <input type="text" name="CodePostal" placeholder="Code postal" />
        <input type="text" name="Ville" placeholder="Ville" />
        <select name="Pays"></select>
        <input type="tel" name="NTelephone" placeholder="Téléphone" />
        <input type="password" name="mdp" placeholder="Mot de passe" required />
        <input type="password" name="mdpconf" placeholder="Confirmer mot de passe" required />
        <div id="regMessage"></div>
        <input id="regSubmit" type="button" value="Inscription" />
    </form>
  </div>
</div>
