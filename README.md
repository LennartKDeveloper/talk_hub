# GDG Talk Hub

Dieses Projekt beinhaltet die Webanwendung für das GDG Talk Hub sowie ein Admin-Tool zum Hinzufügen von neuen Vorträgen.

## Lokales Testen der Webversion

Um die Webversion auf dem eigenen Computer zu starten und auszutesten, folgen Sie diesen Schritten:

1. Öffnen Sie das Projekt in VS Code.
2. Öffnen Sie ein neues Terminal in VS Code (oben im Menü auf "Terminal" -> "Neues Terminal" klicken).
3. Installieren Sie zunächst alle benötigten Abhängigkeiten. Geben Sie dafür folgenden Befehl in das Terminal ein und drücken Sie Enter:
   npm install

4. Starten Sie die Webversion mit folgendem Befehl (direkt aus dem Hauptordner):
   npm run dev

5. Sobald der Ladevorgang abgeschlossen ist, können Sie Ihren Browser öffnen und die Seite unter folgender Adresse aufrufen:
   http://localhost:3000

## Wie man einen neuen Talk hinzufügt

Wenn Sie dieses Projekt in VS Code geöffnet haben und einen neuen Talk hinzufügen möchten, gehen Sie bitte Schritt für Schritt wie folgt vor:

### 1. Das Admin-Tool starten
Das Hinzufügen geschieht über eine einfache Oberfläche, die Sie zunächst über das Terminal starten müssen.

1. Öffnen Sie ein Terminal in VS Code (Menü: "Terminal" -> "Neues Terminal").
2. Falls Sie noch keine Abhängigkeiten installiert haben, tippen Sie `npm install` und drücken Sie Enter.
3. Starten Sie das Admin-Tool mit folgendem vorgefertigten Befehl (direkt aus dem Hauptordner):
   npm run add-talk
4. Öffnen Sie anschließend Ihren Browser. Die Admin-Oberfläche ist in der Regel unter folgender Adresse erreichbar:
   http://localhost:3001
   (Falls der Browser nicht lädt, schauen Sie in die Ausgabe des Terminals, um die exakte localhost-Adresse zu finden).

### 2. Den Talk absenden
1. Auf der geladenen Admin-Seite sehen Sie ein Formular.
2. Füllen Sie alle benötigten Felder mit den Informationen zum neuen Talk aus.
3. Laden Sie die entsprechende Präsentationsdatei (PDF) in das vorgesehene Feld hoch.
4. Klicken Sie auf den Button zum Speichern und Absenden.
Der Talk ist nun lokal auf Ihrem Rechner in das Projekt eingefügt worden.

### 3. Änderungen in das System hochladen
Damit die Änderungen auch auf der echten Webseite sichtbar werden, müssen die neu erstellten Dateien hochgeladen werden. Dies geschieht wieder in VS Code über das Terminal.

1. Beenden Sie das laufende Admin-Tool im Terminal (klicken Sie ins Terminal und drücken Sie die Tasten "Strg" und "C" gleichzeitig) oder öffnen Sie ein komplett neues Terminal in VS Code.
2. Fassen Sie die vorgenommenen Änderungen zusammen, indem Sie folgenden Befehl ausführen:
   git add .
3. "Verpacken" Sie die Änderungen in einen sogenannten Commit mit einer kurzen Beschreibung. Tippen Sie hierfür folgenden Befehl ein (den Text in den Anführungszeichen können Sie anpassen):
   git commit -m "Neuen Talk hochgeladen"
4. Übertragen Sie die Änderungen auf den Server:
   git push

### 4. Auf Freigabe warten
Da Änderungen erst kontrolliert werden, bevor sie online erscheinen, ist Ihr Talk jetzt noch nicht live auf der Seite zu sehen. 
Sie müssen nun abwarten, bis die von Ihnen hochgeladene Änderung von einem berechtigten Projekt-Administrator überprüft und freigegeben (approved) wurde. Sobald dieser Vorgang abgeschlossen ist, wird Ihr Talk automatisch in die Webseite aufgenommen.
