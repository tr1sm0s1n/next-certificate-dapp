const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Cert', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  let cert

  it('Should deploy the contract', async function () {
    const owner = await ethers.getSigner()

    const Cert = await ethers.getContractFactory('Cert')
    cert = await Cert.deploy()

    expect(cert.deployTransaction.from).to.equal(owner.address)
  })

  it('Should issue the certificate', async function () {
    await expect(
      cert.issueCertificate(1024, 'Lindsey', 'TTE', 'S', '2186-06-12')
    )
      .to.emit(cert, 'Issued')
      .withArgs(1024, '2186-06-12')
  })

  it('Should read the certificate', async function () {
    const certificate = await cert.Certificates(1024)

    expect(certificate[0]).to.equal('Lindsey')
    expect(certificate[1]).to.equal('TTE')
    expect(certificate[2]).to.equal('S')
    expect(certificate[3]).to.equal('2186-06-12')
  })

  it('Should upload the document', async function () {
    await expect(
      cert.uploadDocument(
        2048,
        '0x2f44454d59535449462f6e6578742d63657274696669636174652d646170702f'
      )
    )
      .to.emit(cert, 'Uploaded')
      .withArgs(
        2048,
        '0x2f44454d59535449462f6e6578742d63657274696669636174652d646170702f'
      )
  })

  it('Should read the document', async function () {
    const document = await cert.Documents(2048)

    expect(document).to.equal(
      '0x2f44454d59535449462f6e6578742d63657274696669636174652d646170702f'
    )
  })

  it('Should revert the issuing', async function () {
    const accounts = await ethers.getSigners()

    await expect(
      cert
        .connect(accounts[1])
        .issueCertificate(1024, 'Abigail', 'UNO', 'S', '2186-06-12')
    ).to.be.revertedWith('Access Denied')
  })

  it('Should revert the uploading', async function () {
    const accounts = await ethers.getSigners()

    await expect(
      cert
        .connect(accounts[1])
        .uploadDocument(
          2048,
          '0x2f44454d59535449462f6e66742d636f6e74726163742d74657374696e672f00'
        )
    ).to.be.revertedWith('Access Denied')
  })
})
