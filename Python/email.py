import smtplib
from email.message import EmailMessage
EMAIL_ADDRESS = "sender's email address"
EMAIL_PASSWORD = "sender's email password"
RECEIVER = "receiver's email address"

msg = EmailMessage()
msg['From'] = EMAIL_ADDRESS
msg['To'] = RECEIVER
msg['Subject'] = "Hey this is a test email"
# for html content
msg.set_content("This email was send by Throttlerz")
#   msg.add_alternative("""\
#              html content here 
# """, subtype='html')


with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
    smtp.send_message(msg)
