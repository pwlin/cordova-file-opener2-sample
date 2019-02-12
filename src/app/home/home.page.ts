import { Component } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(
    private fileOpener: FileOpener,
    private file: File,
    private fileTransfer: FileTransfer,
  ) {}

  downloadUri = 'https://secure.zeald.com/site/ifompt/files/Developing%20&%20Monitoring%20clin.%20reasoning,%20A%20Hoke.pdf';

  open () {
    this.download().then((file: FileEntry) => this.openFile(file)).catch(console.error);
  }

  openFile(file: FileEntry) {
    this.fileOpener
      .open(file.toURL(), 'application/pdf')
      .then((res) => console.log('success', res))
      .catch(console.error);
  }

  download() {
    const fileTransferObject: FileTransferObject = this.fileTransfer.create();
    return fileTransferObject
      .download(this.downloadUri, `${this.file.dataDirectory}/file.pdf`);
  }
}
